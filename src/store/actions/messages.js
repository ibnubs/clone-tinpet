import axios from 'axios';

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