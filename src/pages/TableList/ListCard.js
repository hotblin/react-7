import React, { memo } from "react";
import { Row, Col, Card, Icon } from "antd";
const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 50 }
};

const ListCard = memo(() => {
  return (
    <Row className="list-card" gutter={24} type="flex" justify="space-between">
      <Col {...topColResponsiveProps}>
        <div className="small-box bg-info">
          <div className="inner">
            <h3>150</h3>
            <p>New Orders</p>
          </div>
          <div className="icon">
            <i className="fa fa-shopping-bag" />
          </div>
          <a className="small-box-footer" href="null">
            More info <i className="fa fa-arrow-circle-right" />
          </a>
        </div>
      </Col>
      <Col {...topColResponsiveProps}>
        <div className="small-box bg-success">
          <div className="inner">
            <h3>
              53 <sup style={{ fontSize: "20px" }}>%</sup>
            </h3>

            <p>Bounce Rate</p>
          </div>
          <div className="icon">
            <i className="fa fa-bar-chart-o" />
          </div>
          <a className="small-box-footer" href="null">
            More info <i className="fa fa-arrow-circle-right" />
          </a>
        </div>
      </Col>
      <Col {...topColResponsiveProps}>
        <div className="small-box bg-warning">
          <div className="inner">
            <h3>
              53 <sup style={{ fontSize: "20px" }}>%</sup>
            </h3>

            <p>Bounce Rate</p>
          </div>
          <div className="icon">
            <i className="fa fa-bar-chart-o" />
          </div>
          <a className="small-box-footer" href="null">
            More info <i className="fa fa-arrow-circle-right" />
          </a>
        </div>
      </Col>
      <Col {...topColResponsiveProps}>
        <div className="small-box bg-danger">
          {" "}
          <div className="inner">
            <h3>
              53 <sup style={{ fontSize: "20px" }}>%</sup>
            </h3>

            <p>Bounce Rate</p>
          </div>
          <div className="icon">
            <i className="fa fa-bar-chart-o" />
          </div>
          <a className="small-box-footer" href="null">
            More info <i className="fa fa-arrow-circle-right" />
          </a>
        </div>
      </Col>
    </Row>
  );
});
export default ListCard;
