import {CREATEPOST_SUCCESS, CREATEPOST_FAILED} from './types';
import {message} from 'antd';
import axios from 'axios';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

export const createPost = (data) => async dispatch => {
	console.log("ada create post gak?", data)
	try{
		const res = await axios.post(`${baseUrl}/api/v1/pets/{id}`, data)
		console.log("respond createpost", res)
		dispatch({
			type: CREATEPOST_SUCCESS
		})
		message.info("create post success!")
	}catch(error) {
		console.log(error)
		dispatch({
			type: CREATEPOST_FAILED
		})
		message.info("create post failed")
	}
}


