import React from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import { withRouter } from "react-router";

import imgUrl from "@static/image/login-blurry-bg.jpg";
import logoUrl from "@static/image/login-logo.png";
import { userLogin } from "@/store/actions/tokenActions";
import "@/style/login.scss";

const FormItem = Form.Item;

class LoginWrapper extends React.Component {
  state = {
    value: "",
    active: false,
    loading: false
  };

  toggleActive = bool => {
    this.setState({
      active: bool
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    this.setState({ loading: true });
    this.props.form.validateFields(async (err, data) => {
      if (!err) {
        // const b = dispatch(setToken(`${new Date().getTime()}`));
        // b.then(res => {
        //   console.log("====================================");
        //   console.log(res);
        //   console.log("====================================");
        // }).catch(err => {
        //   console.log("============err==================");
        //   console.log(err);
        //   console.log("====================================");
        // });
        try {
          const b = await dispatch(userLogin(data));
          window.location.replace("/");
        } catch (error) {
          if (error) {
            message.error("用户名admin，密码随便写");
            this.setState({ loading: false });
          }
        }
      }
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.toggleActive(true);
    }, 200);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { active } = this.state;

    return (
      <div
        className="login-wrapper"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="login-bg" ref="ref-login-bg" />
        <div className={`login-container ${active ? "active" : ""}`}>
          <a href="">
            <img src={logoUrl} alt="seven" width="100" height="30" />
          </a>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "请输入用户名!" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="请输入用户名..."
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "请输入密码!" }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="请输入密码..."
                />
              )}
            </FormItem>
            <FormItem className="text-center">
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>记住密码</Checkbox>)}
              <a className="login-form-forgot">忘记密码</a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                loading={this.state.loading}
              >
                登录
              </Button>
            </FormItem>
          </Form>
          <p className="signup">
            还没有账号？ <a href="signup1.html">立即注册</a>
          </p>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ setToken }, dispatch);
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   // withRouter传入的 prop，用于编程式导航
//   const { history } = ownProps;

//   return {
//     handleSubmitFormData(values) {
//       return dispatch;
//     }
//   };
// };

const Login = Form.create()(withRouter(connect(null, null)(LoginWrapper)));
export default Login;
