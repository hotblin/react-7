import React, { PureComponent } from "react";
import { Input } from "antd";

export default class KeyInput extends PureComponent {
  constructor(props) {
    super(props);
    const key = props.key || "";
    this.state = {
      key
    };
  }
  handleKeyChange = e => {
    const text = e.target.value.trim();
    const onChange = this.props.onChange;
    this.setState({
      key: text
    });
    if (onChange) {
      onChange(text);
    }
  };
  render() {
    const { size } = this.props;
    const state = this.state;
    return (
      <Input
        size={size}
        value={state.key}
        onChange={this.handleKeyChange}
        allowClear
        placeholder="请输入基站名称"
      />
    );
  }
}
