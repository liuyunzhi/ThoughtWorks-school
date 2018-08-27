import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';

const { Content,Sider } = Layout;


const PageContent =  ({selectedKeys}) => {
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
            defaultSelectedKeys={selectedKeys}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
              <Menu.Item key="1">                
                <Link to="/log">我的日志&nbsp;&nbsp;&nbsp;<Icon type="edit" /></Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/focus">我的关注&nbsp;&nbsp;&nbsp;<Icon type="file-text" /></Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/goodLog">优秀日志&nbsp;&nbsp;&nbsp;<Icon type="star-o" /></Link>
              </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    </Content>);
}

  export default PageContent;