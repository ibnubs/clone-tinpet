import { REQUEST_SUCCESS, REQUEST_FAILED, 
	REQUEST_MEETING_APPROVED, REQUEST_MEETING_REJECTED, REQUEST_MEETING_ERROR} from './types';
import Swal from 'sweetalert2';
import axios from 'axios';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

  export const request = (data, id, props ) => async dispatch => {
	try {
		const res = await axios.post(`${baseUrl}/api/v1/requests/${id}`, data, {
			headers: {
			authorization : localStorage.getItem("token")
			}
		})
		console.log(res, "response")
		console.log('Request Success!')
		dispatch({
			type: REQUEST_SUCCESS
		})
		Swal.fire({
			icon: 'success',
			title: 'Request Meeting Success',
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
			title: "Request Meeting Failed, Check your data again!!",
		  })
	}
}

export const approved = (id) => async dispatch => {
	let token = localStorage.getItem("token")
	let appreqUrl = `https://product-tinpet-app.herokuapp.com/api/v1/requests/approved/${id}`
	try{
		const res = await axios( {
			method: 'PUT',
			url : appreqUrl,
			headers: {
				authorization: token
			}
		})
		console.log(res, 'response')
		dispatch({
			type: REQUEST_MEETING_APPROVED
		})

		Swal.fire({
			icon: 'success',
			title: 'Request Meeting Approved',
		})
	} catch(error){
		console.log(error)
		dispatch({
			type: REQUEST_MEETING_REJECTED
		})
	}
}

export const rejected = (id) => async dispatch => {
	let token = localStorage.getItem("token")
	let apprejectUrl = `https://product-tinpet-app.herokuapp.com/api/v1/requests/rejected/${id}`
	try{
		const res = await axios({
			method: 'PUT',
			url : apprejectUrl,
			headers : {
				authorization: token
			}
		})
		console.log(res, 'response')
		dispatch({
			type: REQUEST_MEETING_REJECTED
		})
		Swal.fire({
			icon: 'success',
			title: 'Request Meeting Rejected',
		})
	}catch(error) {
		console.log(error)
		dispatch({
			type: REQUEST_MEETING_ERROR
		})
	}
}



