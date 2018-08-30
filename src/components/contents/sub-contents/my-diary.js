import React from 'react'
import Markdown from 'react-markdown'
import { Card, Button, Row, Col, Popconfirm, Icon } from 'antd'

const MyDiary = ({ item, deleteDiaryHandle } = this.props) => {
	return (
		<Card title={item.date + '的日志'}
			extra={
				<Popconfirm title="确定删除吗？"
					onConfirm={deleteDiaryHandle}
					okText="确定"
					cancelText="取消">
					<Icon type="close" />
				</Popconfirm>
			} >
			<Markdown source={item.content} />
			<Row gutter={24} type="flex" justify="end">
				<Col >
					<Button type="primary" ghost>
						修改日志
					</Button>
				</Col>
				<Col>
					<Button type="primary" ghost>
						评论日志
					</Button>
				</Col>
			</Row>
		</Card >
	)
}

export default MyDiary