import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.scss';
import imgUrl from '@static/image/login-blurry-bg.jpg';
import logoUrl from '@static/image/login-logo.png';

const FormItem = Form.Item;

class LoginWrapper extends React.Component{
  state = {
    value:""
  }

  getValidationState = () => {

  }

  handleChange = (e) =>{
    this.setState({
      value:e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {history}  = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        history.push('/');
      }else{
        // console.log('Received values of form: ', values);
      }
  })
  }


  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-wrapper" style={{backgroundImage: 'url('+imgUrl+')'}}>
        <div className="login-container active">
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

const Login = Form.create()(LoginWrapper);
export default Login;
