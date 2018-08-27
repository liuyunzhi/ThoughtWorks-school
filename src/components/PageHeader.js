import { Layout, Dropdown, Menu, message, Button, Icon } from 'antd';
import React from 'react';

const { Header } = Layout;
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1"><Icon type="setting" />个人中心</Menu.Item>
    <Menu.Item key="2"><Icon type="logout" />退出</Menu.Item>
  </Menu>
);

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const PageHeader = () => {
  return (
    <Header className="header App-header">
      <img alt="logo" src="./static/logo-white.763050c9.png" className="App-logo" />
      <Dropdown overlay={menu}>
        <Button style={{ float: 'right' }}>
          User <Icon type="down" />
        </Button>
      </Dropdown>
    </Header>
  );
}

export default PageHeader;