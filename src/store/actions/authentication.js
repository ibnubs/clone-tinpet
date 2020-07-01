import { REGISTER_SUCCESS, REGISTER_FAILED } from './types';
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