const initialState = {
	token: localStorage.getItem('token'),
	error: null,
    loading: false,
    allMessage: [],
    countMessage: []
}



const messageTampung = (state = initialState, action) => {

	const {type, payload} = action;
	switch (type){
		case 'GET_ALL_MESSAGE_SUCCESS':
			return{
				...state,
				allMessage: payload
			};
		case 'GET_ALL_MESSAGE_FAILED':
			return{
				...state,
            }
        case 'GET_COUNT_MESSAGE_SUCCESS':
            return{
                ...state,
                countMessage:payload
            }
        case 'GET_COUNT_MESSAGE_FAILED':
            return{
                ...state,
            }
		default:
			return {...state};
	}
}

export default messageTampung;