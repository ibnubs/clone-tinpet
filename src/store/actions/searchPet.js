import axios from 'axios';
import {SEARCH_PET_SUCCESS, SEARCH_PET_FAILED} from './types';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

export const searchPet = (data) => async dispatch =>{
	console.log( data, 'tes data isi apa')
	let token = localStorage.getItem('token')
	try{
		const res = await axios.get(`${baseUrl}/api/v1/searches?location=${data.location}&category=${data.category}`, 
			{ headers: {authorization: token}})
		console.log("respond search result", res)
		dispatch({type: SEARCH_PET_SUCCESS, payload: res.data.data })
	}catch(error){
		console.log('error', error)
		dispatch({type: SEARCH_PET_FAILED})
	}
}