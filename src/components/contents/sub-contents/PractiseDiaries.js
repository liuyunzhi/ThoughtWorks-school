import { connect } from 'react-redux'
import React from 'react'
import { List } from 'antd'
import NewDiary from './NewDiary'
import MyDiary from './MyDiary'

const PractiseDiaries = ({ addDiaryHandle, diaries, deleteDiaryHandle } = this.props) => {
	return (
		<List
			header={<NewDiary addDiaryHandle={addDiaryHandle} />}
			grid={{ gutter: 24 }}
			dataSource={diaries}
			renderItem={(item, index) => (
				<List.Item>
					<MyDiary item={item} index={index} deleteDiaryHandle={deleteDiaryHandle} />
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
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(PractiseDiaries)
