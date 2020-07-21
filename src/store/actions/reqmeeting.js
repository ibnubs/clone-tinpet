import { REQUEST_SUCCESS, REQUEST_FAILED
} from './types';
// import { message } from 'antd';
import axios from 'axios';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

    export const request = (data, id) => async dispatch => {
	try {
		const res = await axios.post(`${baseUrl}/api/v1/requests/${id}`, data, {
			headers: {
			Authorization : localStorage.getItem("token")
			}
		})
		console.log(res, "response")
		dispatch({
			type: REQUEST_SUCCESS
		})

	} catch (error) {
		console.log(error.response)
		dispatch({
			type: REQUEST_FAILED
		})
	}
}


