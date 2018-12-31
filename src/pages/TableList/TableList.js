import React, {
  Component,Suspense
} from 'react';
import { Layout } from "antd";
import ContentHeader from '@/components/ContentHeader';
import ListCard from './ListCard';
import SaleCard from './SaleCard';
export default class TableList extends Component {
  render(){
    return (
      <Layout className="layout-content nomargin">
          <ContentHeader/>
          <div className="content-wrapper">
            <Suspense fallback={null}>
              <ListCard />
            </Suspense>
            <Suspense fallback={null}>
              <SaleCard/>
            </Suspense>
          </div>
      </Layout>
    )
  }
}