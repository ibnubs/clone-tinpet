import React, { useState, useEffect, useCallback} from 'react';
import { Modal, Form, Input, Button, message, Upload} from 'antd';
import { LoadingOutlined, PlusOutlined} from '@ant-design/icons'; //editoutlined
import './UpdateProfileModal.scss';
import { useSelector } from 'react-redux'; //, useDispatch
import {updateProfile} from '../../store/actions/authentication';
import store from '../../store/index';


const UpdateProfileModal = (props) => {
		 //state
	const {setUpdateProfileModal, dispatch, updateProfileModal } = props
	// const [ isLoading, setIsLoading ] = useState(false)
	const [file, setFile ] =useState(null)
	const [imgUpload, setImgUpload] = useState ({
		loading: false,
		imgUrl: localStorage.getItem('userAvatar')
	})
	 //store
	// const loading = useSelector(state => state.auth.loading)
	const isAuthenticate = useSelector(state => state.auth.isAuthenticate)
	const updateStatus = useSelector( state => state.auth.updateStatus)
	
	const closeModal = useCallback(
		() => {
				setUpdateProfileModal (false)
		}, [setUpdateProfileModal],
	)

	useEffect( () =>{
		if(isAuthenticate){
			closeModal()
		}
	}, [isAuthenticate, closeModal])

	function getBase64(img, callback) {
	  const reader = new FileReader();
	  reader.addEventListener('load', () => callback(reader.result));
	  reader.readAsDataURL(img);
	}

	function beforeUpload(file) {
	  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
	  if (!isJpgOrPng) {
	    message.error('You can only upload JPG/PNG file!');
	  }
	  const isLt2M = file.size / 1024 / 1024 < 2;
	  if (!isLt2M) {
	    message.error('Image must smaller than 2MB!');
	  }
	  return isJpgOrPng && isLt2M;
	}

	const handleChangeCallback = () => {
		const status = store.getState().auth.updateStatus
		if(status === 'done'){
			console.log("done")
			getBase64(file, imgUrl => 
				setImgUpload({
					imgUrl,
					loading: false
				}),
			);
			
			dispatch({type: "UPDATE_INITIAL"})
		}
		if (status === 'failed'){
			setImgUpload({
				...imgUpload,
				loading: false,
			})
			dispatch({type: 'UPDATE_INITIAL'})
		}
	}

	const handleChange = async (callback) => {
		const data = new FormData()
		data.append("image", file)
		if(updateStatus === 'initial') {
			console.log("uploading")
			setImgUpload({loading: true});
			await dispatch(updateProfile(data))
		}
		callback()
	}

	 const uploadButton = (
    <div>
      {imgUpload.loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Change Picture</div>
    </div>)

  const { imgUrl } = imgUpload
	// const [imageUrl, setimageUrl] = useState();

	return(
		<Modal style={{ transition: "all .4s ease"}}
		  	onCancel={()=>setUpdateProfileModal(false)}
		  	visible={updateProfileModal}
		  	className="modal"
		  	footer='null'
			>

			<div className="updateprofile-wrapper">

				<h1> Edit Profile </h1>
				<Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          beforeUpload={file => {beforeUpload(file); setFile(file)}}
          onChange={()=>handleChange(handleChangeCallback)}
        >
           {imgUrl ? <img src={imgUrl} alt="avatar" className="image-uploader"/> : uploadButton}
        </Upload>

				<Form labelCol={{span: 5,}} wrapperCol={{span: 35,}} layout="vertical">
		      <Form.Item label="Full Name">
		        <Input  className="input"/>
		      </Form.Item>

		      <Form.Item label="Email">
		        <Input  className="input"/>
		      </Form.Item>

 					<Form.Item label="Mobile Number">
		        <Input  className="input"/>
		      </Form.Item>

 					<Form.Item label="Full Address">
		        <Input  className="input"/>
		      </Form.Item>
					
					<Form.Item className="button_post">
	          <Button type="primary" style={{ fontWeight: 'bold', backgroundColor: '#FF65C5', width: '130px'}}
	           key="submit">Save Changes</Button>
	        </Form.Item>

	        <Form.Item className="button_cancel">
	          <Button onClick={()=>setUpdateProfileModal(false)}>Cancel</Button>
	        </Form.Item>

				</Form>
			</div>
		</Modal>
	)
}; 

export default UpdateProfileModal;