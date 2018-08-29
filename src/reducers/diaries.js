const diaries = (state = [], action) => {
	switch (action.type) {
	case 'ADD_DIARY': {
		const newState = [...state]
		newState.push(action.data)
		return newState
	}
	default:
		return state
	}
}

export default diaries