import React, { Component } from "react";
import { Table } from "antd";
import { columns, data } from "@/material/bsTable";

class BsTable extends Component {
  onChange = (pagination, filters, sorter) => {
    // console.log("params", pagination, filters, sorter);
  };
  componentWillReceiveProps(nextProps) {
    console.log("组件收到的参数更新了");
    const { searchKey } = this.props;
    if (searchKey === nextProps.searchKey) {
      return false;
    }
  }

  componentDidMount() {
    const { searchKey } = this.props;
    console.log(searchKey);
  }

  getInitTableState = () => {};
  render() {
    const { pagination } = this.props;
    const { onChange } = this;
    return (
      <div className="react-table">
        <Table
          pagination={pagination}
          columns={columns}
          dataSource={data}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default BsTable;
