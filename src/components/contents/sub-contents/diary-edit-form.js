import React from 'react'
import { Form, DatePicker, Input, Button, Row, Col } from 'antd'

const { TextArea } = Input

const formItemLayout = {
	labelCol: {
		xs: { span: 8 },
		sm: { span: 4 }
	},
	wrapperCol: {
		xs: { span: 16 },
		sm: { span: 20 }
	}
}

const DiaryEditForm = (
	{
		date,
		content,
		handleContent,
		handleDate,
		handleCancel,
		handleConfirm
	} = this.props
) => {
	return (
		<Form>
			<Form.Item {...formItemLayout} label="日期">
				<DatePicker format={'YYYY/MM/DD'} value={date} onChange={handleDate} />
			</Form.Item>
			<Form.Item {...formItemLayout} label="总结内容">
				<TextArea
					rows={5}
					size="large"
					className="ant-input"
					value={content}
					onChange={handleContent}
				/>
			</Form.Item>
			<Row gutter={24} type="flex" justify="end">
				<Col>
					<Button type="primary" ghost onClick={handleConfirm}>
						提交
					</Button>
				</Col>
				<Col>
					<Button onClick={handleCancel}>取消</Button>
				</Col>
			</Row>
		</Form>
	)
}

export default DiaryEditForm
