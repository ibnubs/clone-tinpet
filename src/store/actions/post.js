import {GET_ALL_POST, GET_ALL_POST_FAILED}  from './types';
import axios from 'axios';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

export const getAllPets = () => async (dispatch) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get(`${baseUrl}/api/v1/pets/all`, {
            headers: {
                authorization:token
            }
        })
        // console.log(res, 'ini res getallpost')
        // console.log(res.data, 'ini res getallpost.data')
        // console.log(res.data.data, 'ini res getallpost.data.data')
        dispatch({
            type: 'GET_ALL_POST',
            payload: res.data.data 
        })
    } catch (error) {
        console.log(error, 'error getAllPets')
        dispatch({
            type: 'GET_ALL_POST_FAILED'
        })
    }
}