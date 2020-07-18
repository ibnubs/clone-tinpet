import {
	REGISTER_SUCCESS, REGISTER_FAILED,
	LOGIN_SUCCESS, LOGIN_FAILED,
} from './types';
import Swal from 'sweetalert2';
import axios from 'axios';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

export const register = (data, props) => async dispatch => {
	console.log("data", data)
	try {
		const res = await axios.post(`${baseUrl}/api/v1/users/register`, data)
		console.log('respond', res)
		console.log('Register Success!')
		dispatch({
			type: REGISTER_SUCCESS
		})
		Swal.fire({
			icon: 'success',
			title: 'success',
			text: 'Register Success',
		})
		props.history.push("/login")
	}
	catch (error) {
		console.log(error.status)
		dispatch({
			type: REGISTER_FAILED
		})
		Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: "Password Doesn't Match!",
		})
	}
}


export const login = (data, props) => async dispatch => {
	console.log("data", data)
	// let token = localStorage.getItem("token")
	try {
		const res = await axios.post(`${baseUrl}/api/v1/users/login`, data)
		console.log("respond dong", res)
		console.log('respon data', res.data)
		if (res.data.status === 'success') {
			localStorage.setItem("token", res.data.data.token)
			// axios.defaults.headers.common['/Authorization'] = res.data.data.token;
		}
		dispatch({
			type: LOGIN_SUCCESS
		})
		Swal.fire({
			icon: 'success',
			title: 'success',
			text: 'Login Success',
		})
		props.history.push("/homepage")
	} catch (error) {
		console.log(error)
		dispatch({
			type: LOGIN_FAILED
		})
		Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: 'Wrong Password!',
		  footer: '<a href>Forgot your Password ?</a>'
		})
	}

}

