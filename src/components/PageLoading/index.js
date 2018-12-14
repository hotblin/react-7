import React from 'react';
import { Spin } from 'antd';
import './index.scss';

export default ({fullpage,...props}) => {  
  return(
    <div className={`page-loading ${fullpage?'full-page':''}`}>
      <Spin size="large" {...props}/>
    </div>
  )
}


  
  
