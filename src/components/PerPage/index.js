import React from 'react';
import {withRouter} from 'react-router-dom';
import {Layout} from 'antd';
import TopHeader from '@components/TopHeader/TopHeader';


const PerPage = props => (
  <Layout className="perpage-container" style={{minHeight:"100vh"}}>
    <TopHeader/>
    <div className="perpage-content">
      {props.children}
    </div>
  </Layout>
)


export default withRouter(PerPage);