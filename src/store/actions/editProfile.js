import {EDIT_PROFILE_SUCCESS, EDIT_PROFILE_FAILED} from './types';
import axios from 'axios';

export const editProfile = data => {
	let token = localStorage.getItem('token');
	return (dispatch) => {
		axios({
			method: "PUT",
			url: 'https://product-tinpet-app.herokuapp.com/api/v1/users/profile',
			data,
			headers: {
				authorization: token,
			}
		})
		.then((res) => {
			console.log(res, 'res')
			dispatch({
				type: EDIT_PROFILE_SUCCESS,
				payload: res.data.data
			});
		})
		.catch((res) => {
			console.log(res.message, "error");
		})
	}
}
