import React, { Component } from 'react'
import { Card, Form, DatePicker, Input, Button, Row, Col } from 'antd'
import moment from 'moment'

const { TextArea } = Input

const formItemLayout = {
	labelCol: {
		xs: { span: 8 },
		sm: { span: 4 },
	},
	wrapperCol: {
		xs: { span: 16 },
		sm: { span: 20 },
	},
}

class NewDiary extends Component {
	constructor(props) {
		super(props)
		this.handleContent = this.handleContent.bind(this)
		this.handleDate = this.handleDate.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
		this.state = {
			content: '## 我做了什么\n## 学了什么\n## 有什么印象深刻的收获',
			date: moment(Date.now()).format('YYYY/MM/DD')
		}
	}

	handleContent(e) {
		this.setState({ content: e.target.value })
	}

	handleDate(date, dateString) {
		this.setState({ date: dateString })
	}

	handleCancel() {
		this.setState({content: ''})
	}

	render() {
		return (
			<Card title="新的日志"
				extra={<a href="https://school.thoughtworks.cn/bbs/topic/1230/%E5%A6%82%E4%BD%95%E5%86%99%E4%B8%80%E7%AF%87%E4%BC%98%E7%A7%80%E7%9A%84%E6%88%90%E9%95%BF%E6%97%A5%E5%BF%97"
					rel="noopener noreferrer"
					target="_blank">
					如何写一篇优秀的成长日志
				</a>} >
				<Form>
					<Form.Item {...formItemLayout} label="日期">
						<DatePicker format={'YYYY/MM/DD'}
							defaultValue={moment(Date.now())}
							onChange={this.handleDate} />
					</Form.Item>
					<Form.Item {...formItemLayout} label="总结内容">
						<TextArea rows={5}
							size="large"
							className="ant-input"
							value={this.state.content}
							onChange={this.handleContent}>
						</TextArea>
					</Form.Item>
					<Row gutter={24} type="flex" justify="end">
						<Col >
							<Button type="primary" ghost
								onClick={() => this.props.addDiaryHandle(this.state.date, this.state.content)}>
								提交
							</Button>
						</Col>
						<Col>
							<Button onClick={this.handleCancel}>取消</Button>
						</Col>
					</Row>
				</Form>
			</Card >
		)
	}
}

export default NewDiary