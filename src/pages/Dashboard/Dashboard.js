import React,{Component} from 'react';
import { Layout,Row,Col } from 'antd';
import './Dashboard.scss';
class Dashborad extends Component{
  render(){
    return(
      <Layout className="per-page">
        <Row className="padding-lr10 margin-b20">
          <div className="dashboard-container stats-container">
          <Col span={6}>
            <div className="number">
              <div className="icon globe"></div>
              86<small>%</small>
            </div>
            <div className="text">
              Overall growth
            </div>
          </Col>
          <Col span={6}>
            <div className="number">
              <div className="icon visitors"></div>
              613
            </div>
            <div className="text">
              Unique visitors
            </div>
          </Col>
          <Col span={6}>
            <div className="number">
              <div className="icon money"></div>
              <small>$</small>924
            </div>
            <div className="text">
              Sales
            </div>
          </Col>
          <Col span={6}>
            <div className="number">
              <div className="icon chat-bubbles"></div>
              325
            </div>
            <div className="text">
              New followers
            </div>
          </Col>
          </div>
        </Row>
        
        
        <Row className="margin-b20">
          <Col span={16} className="padding-lr10">
            <div className="dashboard-container weather">
              <div className="dashboard-content padded">
                
              </div>
            </div>
          </Col>
          <Col span={8} className="padding-lr10">
            <div className="dashboard-container small"></div> 
          </Col>
        </Row>

        <Row className="margin-b20">
          <Col span={12} className="padding-lr10">
            <div className="dashboard-container area-chart"></div>
          </Col>
          <Col span={12} className="padding-lr10">
            <div className="dashboard-container area-chart"></div>
           </Col>
        </Row>

        <Row className="margin-b20">
          <Col span={10} className="padding-lr10">
            <div className="dashboard-container area-chart"></div>
          </Col>
          <Col span={14} className="padding-lr10">
            <div className="dashboard-container area-chart"></div>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default Dashborad;