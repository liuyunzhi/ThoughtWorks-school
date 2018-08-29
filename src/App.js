import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd'
import { HashRouter as Router } from 'react-router-dom'
import HeaderContent from './components/header/HeaderContent'
import BreadcrumbItem from './components/contents/BreadcrumbItem'
import SiderLink from './components/contents/SiderLink'
import ContentRouter from './components/contents/ContentRouter'
import FooterContent from './components/footer/FooterContent'
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
					<Breadcrumb style={{ margin: '16px 0' }}>
						<BreadcrumbItem />
					</Breadcrumb>
					<Router>
						<Layout style={{ padding: '24px 0', background: '#fff' }}>
							<Sider width={200} style={{ background: '#fff' }}>
								<SiderLink />
							</Sider>
							<Content style={{ padding: '0 24px', minHeight: 280, background: '#fff' }}>
								<ContentRouter />
							</Content>
						</Layout>
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
