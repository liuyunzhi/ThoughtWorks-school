import React from 'react';
import { Layout } from 'antd';
import { HashRouter as Router } from 'react-router-dom';
import PageBreadcrumb from './PageBreadcrumb';
import SiderLink from './SiderLink';
import ContentRouter from './ContentRouter';

const { Content } = Layout;


const PageContent = () => {
  return (
    <Content style={{ padding: '0 50px', background: '#ececec' }}>
      <PageBreadcrumb />
      <Router>
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <SiderLink />
          <ContentRouter />
        </Layout>
      </Router>
    </Content>);
}

export default PageContent;