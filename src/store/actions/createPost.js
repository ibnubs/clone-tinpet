import {CREATEPOST_SUCCESS, CREATEPOST_FAILED} from './types';
import {getAllPets} from './post';
import axios from 'axios';
import Swal from 'sweetalert2';
const baseUrl = 'https://product-tinpet-app.herokuapp.com';

export const createPost = (data) => async dispatch => {
	let token = localStorage.getItem("token")
	console.log("ada create post gak?", data)
	try{
		const res = await axios.post(`${baseUrl}/api/v1/pets/`, data, {
			headers: {
				authorization: token
			}
		})
		console.log("respond createpost", res)
		dispatch({
			type: CREATEPOST_SUCCESS
		})
		dispatch(getAllPets())
		Swal.fire({
			icon: 'success',
			title: 'success',
			text: 'Create Post Success',
		})
	}catch(error) {
		console.log(error)
		dispatch({
			type: CREATEPOST_FAILED
		})
		Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: "Create Post Failed!",
		})
	}
}


