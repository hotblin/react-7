import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import imgUrl from '@static/image/login-blurry-bg.jpg';
import logoUrl from '@static/image/login-logo.png';
import {setToken} from '@utils/token';
import {INCREMENT_ASYNC} from '@actions/user'
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

  isActive = (bool)=>{
    this.setState({
      active:bool
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {increase} =this.props;
    increase(200);
    const {history}  = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        setToken("3213131");
        // 触发store获取用户信息
        // setTimeout(_=>{
        //   history.push('/');
        // },200)
      }
    })
  }

  componentDidMount(){
    setTimeout(()=>{
      this.isActive(true);
    },500)
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
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
            </FormItem>
            <FormItem className="text-center">
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </FormItem>
          </Form>
          <p className="signup">
            Don't have an account yet? <a href="signup1.html">Sign up now</a>
          </p>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  }
}
const mapDispatchToProps  = (dispatch, ownProps) => {
  // console.log(ownProps);
  return bindActionCreators({
    increase: INCREMENT_ASYNC,
  }, dispatch);
}

const Login = Form.create()(connect(mapStateToProps,mapDispatchToProps)(LoginWrapper));
export default Login;
