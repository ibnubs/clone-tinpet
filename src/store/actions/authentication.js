import { LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_SUCCESS, REGISTER_FAILED } from './types';
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

// export const login = data => async dispatch => {
// 	try{
// 		const res = await axios.post(`${baseUrl}/api/v1/user/login`, data)	
// 		if (res.data === 201 ) {
// 		localStorage.setItem('newUser', res.data.data.token)
// 		console.log('Login Success!')
// 		dispatch({
// 			type: LOGIN_SUCCESS
// 		})
// 		}
// 	}
// 	catch(error){
// 		dispatch({
// 			type: LOGIN_FAILED
// 		})
// 	}
// }

export const login = (data) => async (dispatch) => {
	try {
		const res = await axios.post(`${baseUrl}/api/v1/user/login`, data)	
		console.log(res.data.data.access_token, "COBA");
	 window.localStorage.setItem("token", res.data.data.access_token);
	 dispatch({
	   type: LOGIN_SUCCESS,
	 });
   } catch (err) {
	 console.log(err);
	 dispatch({
	   type: LOGIN_FAILED
	 })
   }
 };
