import {EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILED} from './types';
import axios from 'axios';
import {message} from 'antd';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

export const editProfile = (data) => async dispatch => {
	let token = localStorage.getItem("token")
	console.log("ada edit profile gak?", data)
	try{
		const res = await axios.put(`${baseUrl}/api/v1/users/profile`, data, {
			headers: {
				authorization: token
			}
		})
		console.log("respond edit profile", res)
		dispatch({
			type: EDIT_PROFILE_SUCCESS
		})
		message.info("edit profile success!")
	}catch(error) {
		console.log(error)
		dispatch({
			type: EDIT_PROFILE_FAILED
		})
		message.info("edit profile failed")
	}
}



