import { Layout } from 'antd';
import React, { Component } from 'react';
import NewCard from './NewCard';

const { Content } = Layout;

class PractiseDiaries extends Component {
  render() {
    return (
      <Content style={{ padding: '0 24px', minHeight: 280, background: '#fff' }}>
        <NewCard />
      </Content>
    );
  }
}

export default PractiseDiaries;
