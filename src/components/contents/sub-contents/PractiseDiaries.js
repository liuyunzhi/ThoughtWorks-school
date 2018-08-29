import { connect } from 'react-redux'
import React from 'react'
import { List } from 'antd'
import NewDiary from './NewDiary'
import MyDiary from './MyDiary'

const PractiseDiaries = ({ addDiaryHandle, diaries } = this.props) => {
	return (
		<List
			header={<NewDiary addDiaryHandle={addDiaryHandle} />}
			grid={{ gutter: 24 }}
			dataSource={diaries}
			renderItem={item => (
				<List.Item>
					<MyDiary item={item} />
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
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(PractiseDiaries)
