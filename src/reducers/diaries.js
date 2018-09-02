const diaries = (state = {}, action) => {
	const newState = Object.assign({}, state)
	switch (action.type) {
		case 'LOAD_DIARIES': {
			return action.data
		}
		case 'ADD_DIARY': {
			newState.content.unshift(action.data)
			newState.content.pop()
			return newState
		}
		case 'DELETE_DIARY': {
			newState.splice(action.data, 1)
			return newState
		}
		case 'UPDATE_DIARY': {
			return newState.map((item, index) => {
				return index === action.data.index
					? Object.assign(item, {
							content: action.data.content,
							date: action.data.date
					  })
					: item
			})
		}
		default:
			return state
	}
}

export default diaries
