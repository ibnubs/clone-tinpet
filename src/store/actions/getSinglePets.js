import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';


export const getSinglePets = () => async (dispatch) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get(`${baseUrl}/api/v1/pets/`, {
            headers: {
                authorization:token
            }
        })
        // console.log(res.data, 'ini res data single' )
        console.log(res.data.data, 'ini res data single' )
        dispatch({
            type: 'GET_OWN_PETS',
            payload: res.data.data
        })
    } catch  (error) {
        console.log(error, 'error dari single get pets')
        dispatch({
            type: 'GET_OWN_PETS_FAILED'
        })
    }
}

export const deletePost = ( id, props) => async dispatch => {
    console.log(id, 'kirim pesan ni',)
    const token = localStorage.getItem('token')
    try {
        const res = await axios.delete(`${baseUrl}/api/v1/pets/${id}`, {headers : {authorization: token}})
        console.log('res', res)
        dispatch({
            type: 'DELETE_POST_SUCCESS',
            payload: id
        })
        Swal.fire({
            icon: 'success',
            title: 'Post Deleted!',
        })
        dispatch(getSinglePets())
    } catch (error) {
        console.log(error, 'delete message failed')
        dispatch({
            type: 'POST_MESSAGE_FAILED'
        })
    }
}

