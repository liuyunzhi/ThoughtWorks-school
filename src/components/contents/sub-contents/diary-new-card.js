import React, { Component } from 'react'
import { Card } from 'antd'
import moment from 'moment'
import DiaryEditForm from './diary-edit-form'

class DiaryNewCard extends Component {
	constructor(props) {
		super(props)
		this.handleContent = this.handleContent.bind(this)
		this.handleDate = this.handleDate.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
		this.handleConfirm = this.handleConfirm.bind(this)
		this.state = {
			content: '## 我做了什么\n## 学了什么\n## 有什么印象深刻的收获',
			date: moment(Date.now())
		}
	}

	handleContent(e) {
		this.setState({ content: e.target.value })
	}

	handleDate(date) {
		this.setState({ date: date })
	}

	handleCancel() {
		this.setState({ content: '' })
	}

	handleConfirm() {
		this.props.addDiaryHandle(this.state.date.format('YYYY-MM-DD'), this.state.content)
	}

	render() {
		return (
			<Card
				title="新的日志"
				extra={
					<a href="https://school.thoughtworks.cn/bbs/topic/1230/%E5%A6%82%E4%BD%95%E5%86%99%E4%B8%80%E7%AF%87%E4%BC%98%E7%A7%80%E7%9A%84%E6%88%90%E9%95%BF%E6%97%A5%E5%BF%97"
						rel="noopener noreferrer"
						target="_blank">
						如何写一篇优秀的成长日志
					</a>
				} >
				<DiaryEditForm
					date={this.state.date}
					content={this.state.content}
					handleContent={this.handleContent}
					handleDate={this.handleDate}
					handleCancel={this.handleCancel}
					handleConfirm={this.handleConfirm} />
			</Card >
		)
	}
}

export default DiaryNewCard