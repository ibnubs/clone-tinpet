// import * as type from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	data: [],
}


const reqMeeting = (state = initialState, action) => {
	const {type} = action;
	switch (type){
		default: 
			return{
			...state
			}
			case type.REQUEST_SUCCESS:
				return{
					...state,
					
				}
			case type.REQUEST_FAILED:
				return{
					...state,
				}

			case type.REQUEST_MEETING_APPROVED:
				return{
					
					...state,
				}
    }
}

export default reqMeeting;