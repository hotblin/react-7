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
    pageInfo: {
      total: 0,
      page: 1,
      loading: false
    },
    pagination: {},
    searchKey: {}
  };
  handleSearch = params => {
    this.setState({
      searchKey: params
    });
  };

  render() {
    const { pagination, searchKey } = this.state;

    return (
      <Layout className="layout-content">
        <PerPageHead />
        <BsSearch style={style} submit={this.handleSearch} />
        <BsTable pagination={pagination} searchKey={searchKey} />
      </Layout>
    );
  }
}

export default BasestationTable;
