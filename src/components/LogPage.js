import { Layout} from 'antd';
import React, {Component} from 'react';
import MyLog from './PageContent';

const {Content} = Layout;

class LogPage extends Component {
  render() {
    return (
      <Layout>
        <MyLog selectedKeys={['1']}></MyLog>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          content1
        </Content>
      </Layout>
    );
  }
}

export default LogPage;
