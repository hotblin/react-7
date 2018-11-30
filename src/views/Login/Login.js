import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import imgUrl from '@static/image/login-blurry-bg.jpg';
import logoUrl from '@static/image/login-logo.png';
import {setToken} from '@utils/token';
import {ASYNC_GETTING_USER_INFORMATION} from '@actions/user';
import {loginIn} from '@api';
import './Login.scss';

const FormItem = Form.Item;
// @connect(
//   state=>state.main,
//   dispatch=>bindActionCreators(INCREMENT,dispatch)
// )

class LoginWrapper extends React.Component{
  state = {
    value:"",
    active:false
  }

  toggleActive = (bool)=>{
    this.setState({
      active:bool
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {history,dispatchAsync_gettingUserInformation}  = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        delete values.remember;
        loginIn(values).then(res => {
          if(res.status === 0){
            setToken(res.result);
            // 触发store获取用户信息
            dispatchAsync_gettingUserInformation();
            setTimeout( _ => {
              history.push('/');
            },200)
          }
        })
      }
    })
  }

  componentDidMount(){
    setTimeout(()=>{
      this.toggleActive(true);
    },200)
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    const {active} = this.state;

    return (
      <div className="login-wrapper" style={{backgroundImage: 'url('+imgUrl+')'}}>
        <div className={`login-container ${active ? 'active':''}`}>
          <a href="">
            <img src={logoUrl} alt="seven" width="100" height="30"/>
          </a>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名..." />
            )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码..." />
            )}
            </FormItem>
            <FormItem className="text-center">
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住密码</Checkbox>
              )}
              <a className="login-form-forgot">忘记密码</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </FormItem>
          </Form>
          <p className="signup">
            还没有账号？ <a href="signup1.html">立即注册</a>
          </p>
        </div>
      </div>
    )
  }
}
// const mapStateToProps = (state) => {
//   return {
//     todoList: state.todoList
//   }
// }

const mapDispatchToProps  = dispatch => {
  return bindActionCreators({
    dispatchAsync_gettingUserInformation: ASYNC_GETTING_USER_INFORMATION,
  }, dispatch);
}

const Login = Form.create()(connect(undefined,mapDispatchToProps)(LoginWrapper));
export default Login;
