import React, { Component } from "react";
import { Form, Row, Col, Input, Button, Icon } from "antd";
const FormItem = Form.Item;

class BsSearchContent extends Component {
  state = {
    expand: false
  };
  // To generate mock Form.Item
  getFields() {
    const count = this.state.expand ? 10 : 6;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={8} key={i} style={{ display: i < count ? "block" : "none" }}>
          <FormItem label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`, {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
      );
    }
    return children;
  }

  handleSearch = e => {
    e.preventDefault();
    const {submit} = this.props;
    this.props.form.validateFields((err, values) => {
      submit(values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  render() {
    const { expand } = this.state;
    const { style } = this.props;
    return (
      <div className="react7-search-form" style={style}>
        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
          <Row gutter={24}>{this.getFields()}</Row>
          <Row>
            <Col span={24} style={{ textAlign: "right" }}>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                Clear
              </Button>
              <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                更多 <Icon type={expand ? "up" : "down"} />
              </a>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
const BsSearch = Form.create()(BsSearchContent);
export default BsSearch;
