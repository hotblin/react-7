import React, { Component } from "react";
import { Table } from "antd";
// import { columns, data } from "@/material/bsTable";
import { columns } from "./material";
import { getBaseStationList } from "@api";
class BsTable extends Component {
  state = {
    data: [],
    pageTotal: 0,
    tableLoading: false,
    current: 0
  };

  // setState 同步策略
  asyncSetState = state => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  onChange = async (pagination, filters, sorter) => {
    // console.log("params", pagination, filters, sorter);
    const { current } = pagination;
    const { searchKey } = this.props;
    const params = {};
    await this.asyncSetState({
      current
    });
    console.log(this.state.current);
    console.log("同步更新");
    this.getInitTableState(params);
  };

  componentWillReceiveProps(nextProps) {
    const { searchKey, currentPage } = this.props;
    if (searchKey === nextProps.searchKey) {
      return false;
    } else {
      this.setState(
        {
          current: currentPage
        },
        _ => {
          this.getInitTableState();
        }
      );
    }
  }

  componentDidMount() {
    const { searchKey, currentPage } = this.props;
    let params = {};
    this.setState(
      {
        current: currentPage
      },
      _ => {
        this.getInitTableState(params);
      }
    );
  }

  getInitTableState = data => {
    const { current } = this.state;
    this.setState();
    let params = {
      size: 10,
      page: current,
      ...data
    };
    this.setState({
      tableLoading: true
    });
    getBaseStationList(params).then(res => {
      if (res.code === 200) {
        this.setState({
          data: res.data.list,
          tableLoading: false,
          pageTotal: res.data.total
        });
      }
    });
  };

  render() {
    const { onChange } = this;
    const { data, tableLoading, pageTotal, current } = this.state;
    const pagination = {
      pageSize: 10,
      current,
      total: pageTotal
    };
    return (
      <div className="react-table">
        <Table
          loading={tableLoading}
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
