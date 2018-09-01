import React, { Component } from 'react'
import { List, Pagination } from 'antd'
import { connect } from 'react-redux'
import DiaryNewCard from './diary-new-card'
import DiaryDisplayCard from './diary-display-card'
import { addDiaryHandle, deleteDiaryHandle, updateDiaryHandle, loadDiariesHandle, pageHandle } from '../../../actions/diaries'

class PractiseDiaries extends Component {

	componentWillMount() {
		let { loadDiariesHandle } = this.props
		loadDiariesHandle()
	}

	render() {
		const { addDiaryHandle, diaries, deleteDiaryHandle, updateDiaryHandle, pageHandle } = this.props
		return (
			<div>
				<List
					header={<DiaryNewCard addDiaryHandle={addDiaryHandle} />}
					grid={{ gutter: 24 }}
					dataSource={diaries.content}
					renderItem={item => (
						<List.Item>
							<DiaryDisplayCard
								item={item}
								deleteDiaryHandle={deleteDiaryHandle}
								updateDiaryHandle={updateDiaryHandle} />
						</List.Item>
					)}
				/>
				<Pagination current={diaries.number + 1} onChange={pageHandle} total={diaries.totalElements} />
			</div>
		)
	}
}

const mapStateToProps = ({ diaries }) => ({
	diaries: diaries
})

const mapDispatchToProps = {
	loadDiariesHandle,
	addDiaryHandle,
	deleteDiaryHandle,
	updateDiaryHandle,
	pageHandle
}

export default connect(mapStateToProps, mapDispatchToProps)(PractiseDiaries)
