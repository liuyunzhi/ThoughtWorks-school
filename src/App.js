import React, { Component } from 'react';
import PageConten from './components/PageContent';
import PageFooter from './components/PageFooter';
import PageHeader from './components/PageHeader';
import { Layout } from 'antd';

class App extends Component {
  render() {
    return (
      <Layout>
        <PageHeader/>
        <PageConten/>
        <PageFooter/>
      </Layout>
    );
  }
}

export default App;
