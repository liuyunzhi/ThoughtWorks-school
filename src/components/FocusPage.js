import { Layout} from 'antd';
import React, {Component} from 'react';
import MyFocus from './PageContent';

const {Content} = Layout;

class FocusPage extends Component {
  render() {
    return (
      <Layout>
        <MyFocus selectedKeys={['2']}></MyFocus>
        <Content style={{ padding: '0 24px', minHeight: 280 , background: '#fff'}}>
          content2 
        </Content>
      </Layout>
    );
  }
}

export default FocusPage;
