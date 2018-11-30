import React ,{Component}from 'react';
import {withRouter} from 'react-router-dom'

@withRouter
class WorkPlace extends Component{
  backClick = () =>{
    const {history}  = this.props;
    history.go(-1);
  }
  render(){
    const backClick = this.backClick;
    return (
     <div>
        <button onClick={backClick}>返回</button>
        <h1>fullpage</h1>
     </div>
    )
  }
}

export default WorkPlace