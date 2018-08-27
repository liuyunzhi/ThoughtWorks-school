import React, { Component } from 'react';
import { Layout } from 'antd';
import PageConten from './components/PageContent';
import PageFooter from './components/PageFooter';
import PageHeader from './components/PageHeader';
import './App.css';

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
