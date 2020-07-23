import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';

export const getAllMessage = () => async (dispatch) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get(`${baseUrl}/api/v1/messages/all`, {
            headers: {
                authorization:token
            }
        })
        // console.log(res.data.data, 'get all message data ')
        dispatch({
            type: 'GET_ALL_MESSAGE_SUCCESS',
            payload: res.data.data
        })
    } catch (error) {
        console.log(error, 'error get all message failed')
        dispatch({
            type: 'GET_ALL_MESSAGE_FAILED'
        })
    }
}

export const getCountMessage = () => async (dispatch) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get(`${baseUrl}/api/v1/messages/count`, {
            headers: {
                authorization:token
            }
        })
        dispatch({
            type: 'GET_COUNT_MESSAGE_SUCCESS',
            payload: res?.data?.data
        })
    } catch (error) {
        console.log(error, 'error get all message failed')
        dispatch({
            type: 'GET_COUNT_MESSAGE_FAILED'
        })
    }
}

export const postMessages = ( data, id, props) => async dispatch => {
    console.log(data, 'kirim pesan ni',)
    const token = localStorage.getItem('token')
    try {
        const res = await axios.post(`${baseUrl}/api/v1/messages/${id}`, data, {headers : {authorization: token}})
        console.log('res', res)
        dispatch({
            type: 'POST_MESSAGE_SUCCESS',
            // payload: res.data.data
        })
        Swal.fire({
            icon: 'success',
            title: 'success',
            text: 'Message Sent',
        })
    } catch (error) {
        console.log(error, 'post message failed')
        dispatch({
            type: 'POST_MESSAGE_FAILED'
        })
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Message not sent!!",
        })
    }
}

