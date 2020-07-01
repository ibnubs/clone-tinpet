import { LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_SUCCESS, REGISTER_FAILED } from './types';
import axios from 'axios';
const baseUrl ='https://product-tinpet-app.herokuapp.com/api/v1';

export const register = data => async dispatch => {
	try{
		const res = await axios.post(`${baseUrl}/user/register`, data)
		localStorage.setItem('access_token', res.data.data.token)
		console.log('Register Success!')
		dispatch({
			type: REGISTER_SUCCESS
		})
	}
	catch(error){
		dispatch({
			type: REGISTER_FAILED
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
