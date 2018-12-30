import React,{PureComponent} from 'react';
import { Row, Col,Breadcrumb } from 'antd';
export default class ContentHeader extends PureComponent{
  render(){
    return (
      <Row className="content-header">
            <Col span={8} className="content-header-left">
              <h1>TableList</h1>
            </Col>
          <Col className="content-header-right" span={8} offset={8}>
              <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
          </Col>   
      </Row>
    )
  }
}