const diaries = (state = {}, action) => {
	switch (action.type) {
		case 'LOAD_DIARIES': {
			return action.data
		}
		default:
			return state
	}
}

export default diaries
