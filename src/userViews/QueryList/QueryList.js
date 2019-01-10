import React, { PureComponent } from "react";
import { Layout, Row, Col } from "antd";
import SearchBar from "./SearchBar";
import TableBox from "./TableBox";
import { getBasestationList } from "@/api";
const topColResponsiveProps = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 24,
  xl: 24
};
export default class QueryList extends PureComponent {
  state = {
    response: {},
    currentPage: 1,
    pageSize: 15,
    loading: false,
    params: {}
  };
  onChange = currentPage => {
    this.getInfo(Object.assign({}, this.state.params, { currentPage }));
  };

  onSearch = params => {
    this.setState({ params });
    this.getInfo(params);
  };
  onDelete = id => {
    const currentPage = 1;
    console.log(id);
    this.getInfo({ currentPage });
  };
  onEdit = params => {
    console.log(JSON.stringify(params));
    const { currentPage } = this.state;
    this.getInfo({ currentPage });
  };
  getInfo = params => {
    const { currentPage } = params;
    params = { ...params, size: 15, page: currentPage };
    this.setState({
      loading: true,
      currentPage
    });
    getBasestationList(params).then(res => {
      const data = res.data;
      this.setState({
        response: data,
        loading: false
      });
    });
  };
  componentDidMount() {
    const currentPage = this.state.currentPage;
    this.getInfo({ currentPage });
  }
  render() {
    const pageSize = this.state.pageSize;
    const total = this.state.response.total;
    const loading = this.state.loading;
    const currentPage = this.state.currentPage;
    const { onDelete, onEdit } = this;
    return (
      <Layout className="layout-content nomargin">
        <Row>
          <Col {...topColResponsiveProps} className="query-search-box">
            <SearchBar submit={this.onSearch} />
          </Col>
        </Row>
        <Row>
          <Col {...topColResponsiveProps} className="query-table-box table-box">
            <TableBox
              pageSize={pageSize}
              onChange={this.onChange}
              onDelete={onDelete}
              onEdit={onEdit}
              data={this.state.response}
              loading={loading}
              total={total}
              currentPage={currentPage}
            />
          </Col>
        </Row>
      </Layout>
    );
  }
}
