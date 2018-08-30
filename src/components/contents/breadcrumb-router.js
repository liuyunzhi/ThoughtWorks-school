import React from 'react'
import { Breadcrumb } from 'antd'
import { Switch, Route } from 'react-router-dom'

const BreadcrumbRouter = () => {
	return (
		<Breadcrumb style={{ margin: '16px 0' }}>
			<Breadcrumb.Item>思特沃克学院</Breadcrumb.Item>
			<Breadcrumb.Item>成长日志</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Switch>
					<Route exact path="/" component={() => '我的日志'} />
					<Route path="/practise-diaries" component={() => '我的日志'} />
					<Route path="/followees" component={() => '我的关注'} />
					<Route path="/excellent-diaries" component={() => '优秀日志'} />
				</Switch>
			</Breadcrumb.Item>
		</Breadcrumb>
	)
}

export default BreadcrumbRouter
