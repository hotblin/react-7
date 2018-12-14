import React, {
  memo
} from 'react';
import {
  Card,
  Col,
  Icon,
  Row,
  Tooltip
} from 'antd';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

const IntroduceRow = memo(({
  visitData,
  loading
}) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <Card loading={loading}>
        <div className="chart-box-head">
          <h2>总销售额</h2>
        </div>
        <div className="chart-box-body" style={{height: '46px'}}></div>
        <div className="chart-box-footer">
          
        </div>
      </Card>
    </Col>
     <Col {...topColResponsiveProps}>
      <Card loading={loading}>
        <div className="chart-box-head">
          <h2>总销售额</h2>
        </div>
        <div className="chart-box-body" style={{height: '46px'}}></div>
        <div className="chart-box-footer">
          
        </div>
      </Card>
    </Col>
     <Col {...topColResponsiveProps}>
      <Card loading={loading}>
        <div className="chart-box-head">
          <h2>总销售额</h2>
        </div>
        <div className="chart-box-body" style={{height: '46px'}}></div>
        <div className="chart-box-footer">
          
        </div>
      </Card>
    </Col>
     <Col {...topColResponsiveProps}>
      <Card loading={loading}>
        <div className="chart-box-head">
          <h2>总销售额</h2>
        </div>
        <div className="chart-box-body" style={{height: '46px'}}></div>
        <div className="chart-box-footer">
          
        </div>
      </Card>
    </Col>
  </Row>
));


export default IntroduceRow;