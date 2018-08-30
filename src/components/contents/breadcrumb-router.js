import React from 'react'
import { Breadcrumb } from 'antd'
import { Switch, Route } from 'react-router-dom'

const BreadcrumbRouter = () => {
	return (
		<Breadcrumb.Item>
			<Switch>
				<Route exact path="/" component={() => '我的日志'} />
				<Route path="/practise-diaries" component={() => '我的日志'} />
				<Route path="/followees" component={() => '我的关注'} />
				<Route path="/excellent-diaries" component={() => '优秀日志'} />
			</Switch>
		</Breadcrumb.Item>
	)
}

export default BreadcrumbRouter
