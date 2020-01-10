import React from "react";
import { Layout } from "antd";
import TopBar from "@components/TopBar";

// WithTopBar
export default Content => {
  return (
    <Layout className="perpage-container" style={{ minHeight: "100vh" }}>
      <TopBar />
      <div className="perpage-content">
        <Content />
      </div>
    </Layout>
  );
};
