import React,{memo} from 'react';
import { Row, Col, Card, Icon } from "antd";

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
  style: { marginBottom: 50 }
};

const SaleCard = memo(()=>{
  return (
    <Row className="sale-card" gutter={24} type="flex" justify="space-between">
       <Col {...topColResponsiveProps}>
          <div className="box">
             <Card
    title="Card title"
    extra={<a href="#">More</a>}
    style={{ width: "100%",height:"100%" }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
          </div>
       </Col>
        <Col {...topColResponsiveProps}>
          <div className="box">
             <Card
    title="Card title"
    extra={<a href="#">More</a>}
    style={{ width: "100%",height:"100%" }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
          </div>
       </Col>
    </Row>
  )
});

export default SaleCard;