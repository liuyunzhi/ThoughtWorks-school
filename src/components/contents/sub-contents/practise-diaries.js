import React, { Component } from 'react'
import { List, Pagination } from 'antd'
import { connect } from 'react-redux'
import DiaryNewCard from './diary-new-card'
import DiaryDisplayCard from './diary-display-card'
import {
	loadDiariesAction,
	addDiaryAction,
	deleteDiaryAction,
	updateDiaryAction,
	pageAction
} from '../../../actions/diaries'

class PractiseDiaries extends Component {
	componentDidMount() {
		let { loadDiariesHandle } = this.props
		loadDiariesHandle()
	}

	render() {
		const {
			addDiaryHandle,
			diaries,
			deleteDiaryHandle,
			updateDiaryHandle,
			pageHandle
		} = this.props
		return (
			<div>
				<List
					header={<DiaryNewCard addDiaryHandle={addDiaryHandle} />}
					grid={{ gutter: 24 }}
					dataSource={diaries.content}
					renderItem={item => (
						<List.Item>
							<DiaryDisplayCard
								key={item.id}
								item={item}
								deleteDiaryHandle={deleteDiaryHandle}
								updateDiaryHandle={updateDiaryHandle}
							/>
						</List.Item>
					)}
				/>
				<Pagination
					current={diaries.number + 1}
					onChange={pageHandle}
					total={diaries.totalElements}
				/>
			</div>
		)
	}
}

const mapStateToProps = ({ diaries }) => ({
	diaries: diaries
})

const mapDispatchToProps = dispatch => ({
	loadDiariesHandle: () => {
		dispatch(loadDiariesAction())
	},
	addDiaryHandle: (date, content) => {
		dispatch(addDiaryAction(date, content))
	},
	deleteDiaryHandle: id => {
		dispatch(deleteDiaryAction(id))
	},
	updateDiaryHandle: (id, date, content) => {
		dispatch(updateDiaryAction(id, date, content))
	},
	pageHandle: (page, pageSize) => {
		dispatch(pageAction(page, pageSize))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PractiseDiaries)
