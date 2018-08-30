import React, { Component } from 'react'
import Markdown from 'react-markdown'
import { Card, Button, Row, Col, Popconfirm, Icon } from 'antd'
import moment from 'moment'
import DiaryEditForm from './diary-edit-form'

class DiaryDisplayCard extends Component {
	constructor(props) {
		super(props)
		this.handleContent = this.handleContent.bind(this)
		this.handleDate = this.handleDate.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
		this.handleConfirm = this.handleConfirm.bind(this)
		this.handleUpdate = this.handleUpdate.bind(this)
		this.state = {
			isEdit: false,
			content: this.props.item.content,
			date: moment(this.props.item.date, 'YYYY/MM/DD')
		}
	}

	handleContent(e) {
		this.setState({ content: e.target.value })
	}

	handleDate(date) {
		this.setState({ date: date })
	}

	handleCancel() {
		this.setState({ isEdit: false })
	}

	handleConfirm() {
		this.props.updateDiaryHandle(this.props.index, this.state.date.format('YYYY/MM/DD'), this.state.content)
		this.setState({ isEdit: false })
	}

	handleUpdate() {
		this.setState({ isEdit: true })
	}

	render() {
		return (
			<div>
				<Card title={this.props.item.date + '的日志'}
					extra={
						<Popconfirm title="确定删除吗？"
							onConfirm={() => this.props.deleteDiaryHandle(this.props.index)}
							okText="确定"
							cancelText="取消">
							<Icon type="close" />
						</Popconfirm>
					}
					style={{ display: this.state.isEdit ? 'none' : 'block' }} >
					<Markdown source={this.props.item.content} />
					<Row gutter={24} type="flex" justify="end">
						<Col >
							<Button
								type="primary"
								onClick={this.handleUpdate}
								ghost>
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
				<Card
					title="修改成长日志"
					hoverable={true}
					style={{ display: this.state.isEdit ? 'block' : 'none'}} >
					<DiaryEditForm
						date={this.state.date}
						content={this.state.content}
						handleContent={this.handleContent}
						handleDate={this.handleDate}
						handleCancel={this.handleCancel}
						handleConfirm={this.handleConfirm}
						addDiaryHandle={this.handleUpdate} />
				</Card >
			</div>
		)
	}
}

export default DiaryDisplayCard