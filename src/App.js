import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd'
import { HashRouter as Router } from 'react-router-dom'
import HeaderContent from './components/header/header-content'
import BreadcrumbRouter from './components/contents/breadcrumb-router'
import SiderLink from './components/contents/sider-link'
import ContentRouter from './components/contents/content-router'
import FooterContent from './components/footer/footer-content'
import './App.css'

const { Header, Content, Sider, Footer } = Layout

class App extends Component {
	render() {
		return (
			<Layout>
				<Header className="header App-header">
					<HeaderContent />
				</Header>
				<Content style={{ padding: '0 50px', background: '#ececec' }}>
					<Router>
						<div>
							<Breadcrumb style={{ margin: '16px 0' }}>
								<Breadcrumb.Item>思特沃克学院</Breadcrumb.Item>
								<Breadcrumb.Item>成长日志</Breadcrumb.Item>
								<BreadcrumbRouter />
							</Breadcrumb>
							<Layout style={{ padding: '24px 0', background: '#fff' }}>
								<Sider width={200} style={{ background: '#fff' }}>
									<SiderLink />
								</Sider>
								<Content style={{ padding: '0 24px', minHeight: 280, background: '#fff' }}>
									<ContentRouter />
								</Content>
							</Layout>
						</div>
					</Router>
				</Content>
				<Footer style={{ textAlign: 'center', background: '#ececec' }}>
					<FooterContent />
				</Footer>
			</Layout>
		)
	}
}

export default App
