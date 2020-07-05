import { REGISTER_SUCCESS, REGISTER_FAILED, UPDATE_UPLOADING, UPDATE_SUCCESS, UPDATE_FAILED, LOGIN_SUCCESS, LOGIN_FAILED, PROFILE_LOADING_ACTIVE, PROFILE_LOADING_FINISHED } from './types';
import {message} from 'antd';
import axios from 'axios';

const baseUrl ='https://product-tinpet-app.herokuapp.com';

export const register = data => async dispatch => {
	try{
		const res = await axios.post(`${baseUrl}/api/v1/user/register`, data)	
		if (res.data === 201 ) {
		localStorage.setItem('newUser', res.data.data.token)
		console.log('Register Success!')
		dispatch({
			type: REGISTER_SUCCESS
		})
		}
	}
	catch(error){
		dispatch({
			type: REGISTER_FAILED
		})
	}
}


export const updateProfile = data => async dispatch => {
	if(!!data) {
		dispatch({
			type: UPDATE_UPLOADING
		})
		const token = localStorage.getItem("token")
		try {
			const res = await axios ({
				method: "PUT",
				url: 'https://product-tinpet-app.herokuapp.com',
				headers: {
					Authorization: token
				},
				data
			})
			if(res.status === 201) {
				message.info("Update success!")
				!!res.data.data.url && localStorage.setItem("userAvatar", res.data.data.url)
					dispatch({
						type: UPDATE_SUCCESS,
					})
				}
			} catch(error) {
			message.error('failed!')
			dispatch({
				type: UPDATE_FAILED,
				})
			}
		}
	}

export const login = data => async dispatch => {
    try {
        const res = await axios.post(`${baseUrl}/user/login`, data)
        localStorage.setItem("token", res.data.token)
        dispatch({
            type: LOGIN_SUCCESS
        })
    } catch(error) {
		console.log(error)
		dispatch({
	   		type: LOGIN_FAILED
		 })
    }

}
// export const login = (data) => async (dispatch) => {
// 	try {
// 		const res = await axios.post(`${baseUrl}/user/login`, data)
// 		console.log(res.data.data.access_token, "coba");
// 		window.localStorage.setItem('access_token', res.data.data.access_token);
// 		dispatch({
// 	   		type: LOGIN_SUCCESS,
// 	 	});
//    } 
//    catch (err) {
// 	 	console.log(err);
// 	 	dispatch({
// 	   		type: LOGIN_FAILED
// 	 })
//    }
//  };


