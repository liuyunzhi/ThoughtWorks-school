const diaries = (state = [], action) => {
	const newState = [...state]
	switch (action.type) {
	case 'ADD_DIARY': {
		newState.push(action.data)
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
				}) : item
		})
	}
	default:
		return state
	}
}

export default diaries