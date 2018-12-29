import React from "react";
import { Layout } from "antd";
import TopHeader from "@components/TopHeader";

const PerPage = props => (
  <Layout className="perpage-container" style={{ minHeight: "100vh" }}>
    <TopHeader />
    <div className="perpage-content">{props.children}</div>
  </Layout>
);

export default PerPage;
