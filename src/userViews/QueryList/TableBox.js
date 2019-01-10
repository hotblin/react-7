import React, { Component } from "react";
import { Table, Divider, Tag, Button } from "antd";
import moment from "moment";
const generatedColumns = self => {
  return [
    {
      title: "基站名称",
      dataIndex: "bsName",
      key: "bsName",
      align: "center"
    },
    {
      title: "状态",
      dataIndex: "ok",
      key: "ok",
      align: "center",
      render: ok => {
        if (ok) return <Tag color="green">正常</Tag>;
        return <Tag color="#ccc">故障</Tag>;
      }
    },
    {
      title: "设备总量",
      dataIndex: "deviceTotal",
      key: "deviceTotal",
      align: "center"
    },
    {
      title: "联系人",
      dataIndex: "linkMan",
      key: "linkMan",
      align: "center"
    },
    {
      title: "联系电话",
      dataIndex: "linkPhone",
      key: "linkPhone",
      align: "center",
      render: linkPhone => {
        if (linkPhone.length > 11) {
          const linkArray = linkPhone.split(",");
          return (
            <span>
              {linkArray.map(t => (
                <Tag>{t}</Tag>
              ))}
            </span>
          );
        } else {
          return <Tag>{linkPhone}</Tag>;
        }
      }
    },
    {
      title: "创建时间",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
      render: time => <span>{moment(time).format("YYYY-MM-DD HH:mm:ss")}</span>
    },
    {
      title: "操作",
      key: "action",
      align: "center",
      render: (text, record, index) => {
        return (
          <span>
            <Button
              size="small"
              type="primary"
              onClick={() => {
                self.onEdit(record);
              }}>
              编辑
            </Button>
            <Divider type="vertical" />
            <Button
              size="small"
              type="danger"
              onClick={() => {
                self.onDelete(text.id);
              }}>
              删除
            </Button>
          </span>
        );
      }
    }
  ];
};

export default class TableBox extends Component {
  onChange = pagination => {
    const { current } = pagination;
    this.props.onChange(current);
  };
  onDelete = id => {
    this.props.onDelete(id);
  };
  onEdit = params => {
    this.props.onEdit(params);
  };
  render() {
    const { data, loading, total, pageSize, currentPage } = this.props;
    const pagination = {
      pageSize,
      total,
      current: currentPage,
      size: "default"
    };
    const dataSource = data.list || [];
    const columns = generatedColumns(this);
    return (
      <Table
        bordered
        size="middle"
        loading={loading}
        rowKey={record => record.id}
        columns={columns}
        pagination={pagination}
        dataSource={dataSource}
        onChange={this.onChange}
      />
    );
  }
}
