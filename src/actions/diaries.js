import request from 'superagent'

export const loadDiariesHandle = () => {
	return dispatch => {
		request.get('/diaries').then(res => {
			dispatch({
				type: 'LOAD_DIARIES',
				data: res.body
			})
		})
	}
}
export const pageHandle = (page, pageSize) => {
	return dispatch => {
		request
			.get('/diaries')
			.query({ page: page - 1, pageSize: pageSize })
			.then(res => {
				dispatch({
					type: 'LOAD_DIARIES',
					data: res.body
				})
			})
	}
}

export const addDiaryHandle = (date, content) => {
	return dispatch => {
		request
			.post('/diaries')
			.set('Content-Type', 'application/json')
			.send({ date: date, content: content })
			.then(res => {
				dispatch({
					type: 'ADD_DIARY',
					data: res.body
				})
			})
	}
}

export const deleteDiaryHandle = index => {
	return dispatch => {
		dispatch({
			type: 'DELETE_DIARY',
			data: index
		})
	}
}

export const updateDiaryHandle = (index, date, content) => {
	return dispatch => {
		dispatch({
			type: 'UPDATE_DIARY',
			data: {
				index: index,
				date: date,
				content: content
			}
		})
	}
}
