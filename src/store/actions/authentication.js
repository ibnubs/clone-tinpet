import {
	REGISTER_SUCCESS, REGISTER_FAILED,
	UPDATE_UPLOADING, UPDATE_SUCCESS, UPDATE_FAILED,
	LOGIN_SUCCESS, LOGIN_FAILED,
	REQUEST_SUCCESS, REQUEST_FAILED
} from './types';
import { message } from 'antd';
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
		props.history.push("/login")
	}
	catch (error) {
		console.log(error.status)
		dispatch({
			type: REGISTER_FAILED
		})
	}
}

export const login = (data, props) => async dispatch => {
	console.log("data", data)
	let token = localStorage.getItem("token")
	try {
		const res = await axios.post(`${baseUrl}/api/v1/users/login`, data, {
			headers: {
				authorization: token
			}
		})
		console.log("respond dong", res)
		console.log('respon data', res.data)
		if (res.data.status === 'success') {
			localStorage.setItem("token", res.data.data.token)
			// axios.defaults.headers.common['/Authorization'] = res.data.data.token;
		}
		dispatch({
			type: LOGIN_SUCCESS
		})
		props.history.push("/homepage")
	} catch (error) {
		console.log(error)
		dispatch({
			type: LOGIN_FAILED
		})
	}

}

export const updateProfile = data => async dispatch => {
	if (!!data) {
		dispatch({
			type: UPDATE_UPLOADING
		})
		const token = localStorage.getItem("token")
		try {
			const res = await axios({
				method: "PUT",
				url: 'https://product-tinpet-app.herokuapp.com',
				headers: {
					Authorization: token
				},
				data
			})
			if (res.status === 201) {
				message.info("Update success!")
				!!res.data.data.url && localStorage.setItem("userAvatar", res.data.data.url)
				dispatch({
					type: UPDATE_SUCCESS,
				})
			}
		} catch (error) {
			message.error('failed!')
			dispatch({
				type: UPDATE_FAILED,
			})
		}
	}
}

export const request = (data, props) => async dispatch => {
	console.log("data", data)
	try {
		const res = await axios.post(`${baseUrl}/api/v1/requests/:id`, data)
		console.log("respond dong", res)
		localStorage.setItem("token", res.data.token)
		dispatch({
			type: REQUEST_SUCCESS
		})
		props.history.push("/homepage")
	} catch (error) {
		console.log(error)
		dispatch({
			type: REQUEST_FAILED
		})
	}
}



