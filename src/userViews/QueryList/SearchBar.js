import React, { Component } from "react";
import { Form, Button, Radio } from "antd";
import KeyInput from "./KeyInput";
const FormItem = Form.Item;
class SearchBar extends Component {
  state = {
    bsName: "",
    ok: 0
  };
  handleSearch = e => {
    e.preventDefault();
    const { submit } = this.props;
    submit(Object.assign({}, this.state, { currentPage: 1 }));
  };

  onChange = value => {
    this.setState({
      bsName: value
    });
  };

  groupChange = e => {
    const value = e.target.value;
    this.setState({
      ok: value
    });
  };

  render() {
    const { style } = this.props;
    const { ok } = this.state;
    return (
      <div className="in-page-search" style={style}>
        <Form
          layout="inline"
          className="ant-advanced-search-form"
          onSubmit={this.handleSearch}>
          <FormItem label="基站名称">
            <KeyInput onChange={this.onChange} />
          </FormItem>
          <FormItem label="基站状态">
            <Radio.Group onChange={this.groupChange} defaultValue={ok}>
              <Radio value={0}>全部</Radio>
              <Radio value={1}>正常</Radio>
              <Radio value={2}>故障</Radio>
            </Radio.Group>
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
const BsSearch = Form.create()(SearchBar);
export default BsSearch;
