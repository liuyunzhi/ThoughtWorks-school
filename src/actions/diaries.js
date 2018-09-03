import request from 'superagent'
import { success } from '../components/message'

const loadDiaries = dispatch => {
	request.get('/diaries').then(res => {
		dispatch({
			type: 'LOAD_DIARIES',
			data: res.body
		})
	})
}

export const loadDiariesAction = () => {
	return dispatch => {
		loadDiaries(dispatch)
	}
}
export const pageAction = (page, pageSize) => {
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

export const addDiaryAction = (date, content) => {
	return dispatch => {
		request
			.post('/diaries')
			.set('Content-Type', 'application/json')
			.send({ date: date, content: content })
			.then(res => {
				if (res.statusCode === 201) {
					success('添加成功')
					loadDiaries(dispatch)
				}
			})
	}
}

export const deleteDiaryAction = id => {
	return dispatch => {
		request.delete('/diaries/' + id).then(res => {
			if (res.statusCode === 204) {
				success('删除成功')
				loadDiaries(dispatch)
			}
		})
	}
}

export const updateDiaryAction = (id, date, content) => {
	return dispatch => {
		request
			.put('/diaries/' + id)
			.set('Content-Type', 'application/json')
			.send({ date: date, content: content })
			.then(res => {
				if (res.statusCode === 204) {
					loadDiaries(dispatch)
				}
			})
	}
}
