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

const GardCard = memo(() => {
  return (
    <Row gutter={24}>
      <Col {...topColResponsiveProps}>
        <Card bordered={false} className="gard-card-container">
          <div className="gard-card-body">
            <div className="card-icon">
              <Icon type="pie-chart" />
            </div>
            <p className="card-category">Used Space</p>
            <h3 className="card-title">
              49/50
              <small>GB</small>
            </h3>
          </div>
          <div className="gard-card-footer">
            <div className="card-status">
              <span className="danger-icon">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                  </g>
                </svg>
              </span>
              <a href="javascript:void(0);">Get more space</a>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
});

export default GardCard;
