import { REQUEST_SUCCESS, REQUEST_FAILED
} from './types';
// import { message } from 'antd';
import axios from 'axios';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

    export const request = (data, props) => async dispatch => {
	console.log("data", props, data)
	try {
		const res = await axios.post(`${baseUrl}/api/v1/requests/${props.id}`, data)
		console.log("respond dong", res)
		localStorage.setItem("token", res.data.token)
		dispatch({
			type: REQUEST_SUCCESS
		})

	} catch (error) {
		console.log(error)
		dispatch({
			type: REQUEST_FAILED
		})
	}
}


