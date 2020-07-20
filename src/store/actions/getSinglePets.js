import axios from 'axios';

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