import React, {useState, useCallback, useEffect} from 'react';
import { Form, Input, Button,Select, Modal, message, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined, } from '@ant-design/icons';
import { useSelector,  } from 'react-redux';
import {updateProfile} from '../../store/actions/authentication';
import './CreatePostModal.scss';
import store from '../../store/index';

const CreatePostModal = (props) => {

	 //state
	const {setCreatePostModal, dispatch, createPostModal } = props
	const [file, setFile ] =useState(null)
	const [imgUpload, setImgUpload] = useState ({
		loading: false,
		imgUrl: localStorage.getItem('userAvatar')
	})
	 //store
	const isAuthenticate = useSelector(state => state.auth.isAuthenticate)
	const updateStatus = useSelector( state => state.auth.updateStatus)
	const closeModal = useCallback(
		() => {
				setCreatePostModal (false)
		}, [setCreatePostModal],
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
      <div className="ant-upload-text">Upload</div>
    </div>)

  const { imgUrl } = imgUpload
	

  return (

  	<Modal style={{ transition: "all .4s ease"}}
	  	onCancel={()=>setCreatePostModal(false)}
	  	visible={createPostModal}
	  	className="modal"
	  	footer='null'
		>
	    <div className="createpost">
	    	<div className="createpost__header">
	    		<h1> Create a Post </h1>    		
	    	</div>
	    	<div className="createpost-wrapper">
		    	<div className="createpost-wrapper__photo">
		    		
			       <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={file => {beforeUpload(file); setFile(file)}}
            onChange={()=>handleChange(handleChangeCallback)}
          >
            {imgUrl ? <img src={imgUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
      			<div>
      				<Button type="primary" 
      				style={{background: '#3E4C6F', margin: '20px', width: '300px', 
      				height: '40px',fontWeight: 'bold', borderRadius: '5px'}}> 
      				Upload Photo </Button>
      			</div> 
		    	</div>

		    	<div 	className="createpost-wrapper__form">
			      <Form labelCol={{span: 5,}} wrapperCol={{span: 35,}} layout="vertical">

				      <Form.Item label="Pet Name">
				        <Input placeholder="Input your pet's name" className="input"/>
				      </Form.Item>

		      		<Form.Item className="form">
				        <Form.Item
									label="Pet Age"
				          name="year"
				          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
				        >
		          		<Input placeholder="Input birth year" />
		        		</Form.Item>

			        	<Form.Item
				        	label="Pet Category"
				          name="month"
				          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
			       	 	>
				          <Select >
				          	<Select.Option value="demo" > Dog </Select.Option>
				          	<Select.Option value="demo"> Cat </Select.Option>
				          </Select>         
	        			</Form.Item>
	      			</Form.Item>

	      			<Form.Item className="form">
	        			<Form.Item  
									label="Gender"
				          name="year"
				          style={{ display: 'inline-block', width: 'calc(50% - 8px)', }}
	        			>
				         <Select>
				          	<Select.Option value="demo"> Male </Select.Option>
				          	<Select.Option value="demo"> Female </Select.Option>
				          </Select>
	        			</Form.Item>

	        			<Form.Item  
				        	label="Breed"
				          name="month"
				          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
	        			>
	          			<Input placeholder="Input your pet's breed" />
	        			</Form.Item>
	      			</Form.Item>

	      			<Form.Item label="Location"  className="form">
	          		<Input placeholder="Input your location" className="input"/>
	       	 		</Form.Item>
	       			<hr />
	       			
				        <Form.Item className="button_post">
				          <Button type="primary" style={{ fontWeight: 'bold', backgroundColor: '#FF65C5', width: '60px'}}
				           key="submit">Post</Button>
				        </Form.Item>
				        <Form.Item className="button_cancel">
				          <Button onClick={()=>setCreatePostModal(false)}>Cancel</Button>
				        </Form.Item>
			   	  </Form>
	      	</div>
	      </div>
	    </div>    
    </Modal>

  );
};

export default CreatePostModal;


