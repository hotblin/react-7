import React, { Component } from "react";
import { Layout } from "antd";
import BsSearch from "@/components/BsSearch";
import BsTable from "@/components/BsTable";
import PerPageHead from "@/components/PerPageHead";

const style = {
  marginBottom: "20px"
};
class BasestationTable extends Component {
  state = {
    currentPage: 1,
    searchKey: {}
  };
  handleSearch = params => {
    this.setState({
      searchKey: params,
      currentPage: 1
    });
  };

  render() {
    const { currentPage, searchKey } = this.state;
    return (
      <Layout className="layout-content">
        <PerPageHead />
        <BsSearch style={style} submit={this.handleSearch} />
        <BsTable currentPage={currentPage} searchKey={searchKey} />
      </Layout>
    );
  }
}

export default BasestationTable;
