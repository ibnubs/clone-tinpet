import { REGISTER_SUCCESS, REGISTER_FAILED } from './types';
import axios from 'axios';
const baseUrl ='https://product-tinpet-app.herokuapp.com';

export const register = data => async dispatch => {
	console.log("data", data)
	try{
		const res = await axios.post(`${baseUrl}/api/v1/users/register`, data)
		console.log('respond', res)		
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