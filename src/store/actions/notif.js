import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';


export const notifDetail = () => async (dispatch) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get(`${baseUrl}/api/v1/notifications`, {
            headers: {
                authorization:token
            }
        })
        console.log( res.data.data, 'ini data notif')
        console.log( res?.data?.data?.detailNotification, 'ini data notif')
        dispatch({
            type: 'GET_NOTIF_SUCCESS',
            payload: res.data?.data?.detailNotification 
        })
    } catch (error) {
        console.log(error, 'error notif detail failed')
        dispatch({
            type: 'GET_NOTIF_FAILED'
        })
    }
}

export const notifCount = () => async (dispatch) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get(`${baseUrl}/api/v1/notifications/count`, {
            headers: {
                authorization:token
            }
        })
        dispatch({
            type: 'GET_NOTIF_COUNT_SUCESS',
            payload: res.data?.data
        })
    } catch (error) {
        console.log(error, 'error notif count')
        dispatch({
            type: 'GET_NOTIF_COUNT_FAILED'
        })
    }
}

export const deleteNotif = (notif_id) => async (dispatch) => {
    const token = localStorage.getItem('token')
    let urlDeleteNotif = `https://product-tinpet-app.herokuapp.com/api/v1/notifications/${notif_id}`
    try {
        const res = await axios ({
            method:'DELETE',
            url:urlDeleteNotif,
            headers: {
                Authorization:token
            }
        })
        console.log(res.data, 'ini respon dari delete notif')
        Swal.fire({
            icon: res.data.status,
            title: 'Delete Notif',
            text: res.data.message,
        })
        dispatch(notifDetail())
    } catch (error) {
        console.log(error, 'ini erro dari delete notif')
    }
}