import { Layout} from 'antd';
import React, {Component} from 'react';
import GoodLog from './PageContent';

const {Content} = Layout;

class GoodLogPage extends Component {
  render() {
    return (
      <Layout>
        <GoodLog selectedKeys={['3']}></GoodLog>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          content3
        </Content>
      </Layout>
    );
  }
}

export default GoodLogPage;
