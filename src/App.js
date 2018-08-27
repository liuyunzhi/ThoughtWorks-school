import React, { Component } from 'react';
import PageFooter from './components/PageFooter';
import PageHeader from './components/PageHeader';
import AppRouter from './components/AppRouter';
import { Layout } from 'antd';
import './App.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <PageHeader />
        <AppRouter/>
        <PageFooter/>
      </Layout>
    );
  }
}

export default App;
