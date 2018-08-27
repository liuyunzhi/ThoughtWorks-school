import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';

const { Content,Sider } = Layout;


const PageContent = () => {
  return (
    <Content style={{ padding: '0 50px',background: '#ececec'}}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>思特沃克学院</Breadcrumb.Item>
        <Breadcrumb.Item>成长日志</Breadcrumb.Item>
        <Breadcrumb.Item>我的日志</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
              <Menu.Item key="1">我的日志&nbsp;&nbsp;&nbsp;<Icon type="edit" /></Menu.Item>
              <Menu.Item key="2">我的关注&nbsp;&nbsp;&nbsp;<Icon type="file-text" /></Menu.Item>
              <Menu.Item key="3">优秀日志&nbsp;&nbsp;&nbsp;<Icon type="star-o" /></Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          Content
        </Content>
      </Layout>
    </Content>);
}

  export default PageContent;