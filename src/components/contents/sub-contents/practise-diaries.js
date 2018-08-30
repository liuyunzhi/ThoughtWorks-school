import { connect } from 'react-redux'
import React from 'react'
import { List } from 'antd'
import DiaryNewCard from './diary-new-card'
import DiaryDisplayCard from './diary-display-card'

const PractiseDiaries = ({ addDiaryHandle, diaries, deleteDiaryHandle, updateDiaryHandle } = this.props) => {
	return (
		<List
			header={<DiaryNewCard addDiaryHandle={addDiaryHandle} />}
			grid={{ gutter: 24 }}
			dataSource={diaries}
			renderItem={(item, index) => (
				<List.Item>
					<DiaryDisplayCard
						item={item}
						index={index}
						deleteDiaryHandle={deleteDiaryHandle}
						updateDiaryHandle={updateDiaryHandle} />
				</List.Item>
			)}
		/>
	)
}

const mapStateToProps = ({ diaries }) => ({
	diaries: diaries
})

const mapDispatchToProps = (dispatch) => ({
	addDiaryHandle: (date, content) => {
		dispatch(
			{
				type: 'ADD_DIARY',
				data: {
					date: date,
					content: content
				}
			}
		)
	},
	deleteDiaryHandle: (index) => {
		dispatch(
			{
				type: 'DELETE_DIARY',
				data: index
			}
		)
	},
	updateDiaryHandle: (index, date, content) => {
		dispatch(
			{
				type: 'UPDATE_DIARY',
				data: {
					index: index,
					date: date,
					content: content
				}
			}
		)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(PractiseDiaries)
