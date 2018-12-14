import React, { Component, Suspense } from "react";
import { Layout } from "antd";
import PageLoading from "@components/PageLoading";
import "./Dashboard.scss";

const IntroduceRow = React.lazy(() => import("./components/IntroduceRow"));
class Dashborad extends Component {
  render() {
    return (
      <Layout className="layout-content">
        <div className="content-wide">
          <Suspense fallback={<PageLoading />}>
            <IntroduceRow />
          </Suspense>
          <Suspense />
        </div>
      </Layout>
    );
  }
}

export default Dashborad;
