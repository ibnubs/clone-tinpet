import { REQUEST_SUCCESS, REQUEST_FAILED
} from './types';
// import { message } from 'antd';
import Swal from 'sweetalert2';
import axios from 'axios';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

    export const request = (data, id, props ) => async dispatch => {
	try {
		const res = await axios.post(`${baseUrl}/api/v1/requests/${id}`, data, {
			headers: {
			Authorization : localStorage.getItem("token")
			}
		})
		console.log(res, "response")
		console.log('Request Success!')
		dispatch({
			type: REQUEST_SUCCESS
		})
		Swal.fire({
			icon: 'success',
			title: 'success',
			text: 'Request Meeting Success',
		})
		props.history.push("/homepage")
		console.log(props)

	} catch (error) {
		console.log(error)
		dispatch({
			type: REQUEST_FAILED
		})
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "Request Meeting Failed, Check your data again!!",
		  })
	}
}