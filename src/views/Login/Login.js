import React from 'react';
import {FormGroup,Button,Col,FormControl} from 'react-bootstrap';
import './Login.scss';
import imgUrl from '@static/image/login-blurry-bg.jpg';
import logoUrl from '@static/image/login-logo.png';
class Login extends React.Component{
  state = {
    value:""
  }
  getValidationState = () => {

  }
  handleChange = (e) =>{
    // console.log(this)
    this.setState({
      value:e.target.value
    })
  }


  render(){
    return (
      <div className="login-wrapper" style={{backgroundImage: 'url('+imgUrl+')'}}>
        <div className="login-container active">
          <a href="">
            <img src={logoUrl} alt="seven" width="100" height="30"/>
          </a>
          <form>
            <FormGroup controlId="formValidationSuccess1" validationState={this.getValidationState()}>
              <FormControl type="text" placeholder="Username or Email"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="formValidationSuccess1" validationState={this.getValidationState()}>
              <FormControl type="password" placeholder="password"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </FormGroup>
            <div className="form-options clearfix opacity">
              <a className="pull-right" href="#">忘记密码?</a>
              <div className="text-left">
                <label className="checkbox" htmlFor="remeberpassword">
                  <input type="checkbox" id="remeberpassword"/>
                  <span>记住密码</span>
                </label>
              </div>
            </div>
            <FormGroup>
              <Button type="submit" style={{width:'100%'}}>Sign in</Button>
            </FormGroup>
             
          </form>
          <p className="signup">
            Don't have an account yet? <a href="signup1.html">Sign up now</a>
          </p>
        </div>
      </div>
    )
  }
}

export default Login;