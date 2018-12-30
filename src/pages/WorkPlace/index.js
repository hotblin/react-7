import React ,{Component}from 'react';
import {withRouter} from 'react-router-dom'
import { Layout } from "antd";

@withRouter
class WorkPlace extends Component{
  backClick = () =>{
    const {history}  = this.props;
    history.go(-1);
  }
  render(){
    const backClick = this.backClick;
    return (
     <Layout className="layout-content haspadding nomargin">
        <button onClick={backClick}>返回</button>
        <h1>fullpage</h1>
     </Layout>
    )
  }
}

export default WorkPlace