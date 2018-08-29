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
	default:
		return state
	}
}

export default diaries