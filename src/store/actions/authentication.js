import { REGISTER_SUCCESS, REGISTER_FAILED } from './types';
import axios from 'axios';
const baseUrl ='';

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