import axios from 'axios';
import { getAllPets } from './post';
import Swal from 'sweetalert2';
import { getSinglePets } from './getSinglePets';

const baseUrl = 'https://product-tinpet-app.herokuapp.com';


export const getAllComment = () => async (dispatch) => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get(`${baseUrl}/api/v1/comments/all`, {
            headers: {
                authorization:token
            }
        })
        console.log(res, 'res dari koment')
        console.log( res.data.data.allComments, 'res data dari komen')
        dispatch({
            type: 'GET_ALL_COMMENT_SUCCESS',
            payload: res.data.data.allComments
        })
    } catch (error) {
        console.log(error, 'error all comment failed')
        dispatch({
            type: 'GET_ALL_COMMENT_FAILED'
        })
    }
}


export const getPostComment = (data, pets_id) => async (dispatch) => {
    
    const token = localStorage.getItem('token')
    let postCommentUrl = `https://product-tinpet-app.herokuapp.com/api/v1/comments/${pets_id}`
    try {
        const res = await axios ({
            method:'post',
            url: postCommentUrl,
            data,
            headers:{
                Authorization: token
            }
        })
        console.log(res.data, 'ini post comment')
        dispatch({
            type: 'POST_COMMENT_SUCCESS',
        })
        dispatch(getAllPets())
        dispatch(getSinglePets())
        
    } catch (error) {
        console.log(error, 'error post comment')
        dispatch({
            type: 'POST_COMMENT_FAILED'
        })
    }
}

export const deleteComment = (pets_id) => async (dispatch) => {
    const token = localStorage.getItem('token')
    let urlDeleteComment = `https://product-tinpet-app.herokuapp.com/api/v1/comments/${pets_id}` 
    try {
        const res = await axios ({
            method:'DELETE',
            url:urlDeleteComment,
            headers:{
                Authorization: token
            }
        })
        console.log(res.data, 'ini respon dari delete comment')
        Swal.fire({
            icon: res.data.status,
            title: 'Comment Deleted',
        })

        dispatch(getAllPets())
        dispatch(getSinglePets())
    } catch (error) {
        console.log(error, 'ini error dari deletecomment')
    }
}