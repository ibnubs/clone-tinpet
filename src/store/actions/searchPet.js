import axios from 'axios';
import {SEARCH_PET_SUCCESS, SEARCH_PET_FAILED} from './types';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

export const searchPet = (data, props) => async dispatch =>{
	let token = localStorage.getItem('token')
	try{
		const res = await axios.get(`${baseUrl}/api/v1/searches?location={data}category={data}`, data, { headers: {authorization: token}})
		console.log("respond edit profile", res)
		dispatch({type: SEARCH_PET_SUCCESS})
		props.history.push("/searchresult")
	}catch(error){
		dispatch({type: SEARCH_PET_FAILED})
	}
}