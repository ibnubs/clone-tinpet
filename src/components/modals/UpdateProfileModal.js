import React, { useState, useEffect, useCallback} from 'react';
import { Modal, Form, Input, Button, message, Upload} from 'antd';
import { LoadingOutlined, PlusOutlined} from '@ant-design/icons'; //editoutlined
import './UpdateProfileModal.scss';
import { useSelector, useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';
import {updateProfile} from '../../store/actions/authentication';
import swal from 'sweetalert2';
const {TextArea} = Input;

const UpdateProfileModal = (props) => {
		 //state
	const {setUpdateProfileModal, updateProfileModal } = props

	const updateProfile = useSelector( state => state.auth.updateProfile)
	
	const closeModal = useCallback(
		() => {
				setUpdateProfileModal (false)
		}, [setUpdateProfileModal],
	)

// state update profile

const dispatch = useDispatch();
const history = useHistory();
const profile = useSelector((state) => state.profileReducer);
const [image, setImage] = useState('');
// const [full_name, setFull_name] = useState(profile.data.full_name);
// const [email, setEmail] = useState(profile.data.email);
const [mobile_number, setMobile_number] = useState();
const [full_address, setFull_address] = useState('');
const [description, setDescription] = useState('');

// const changeFull_name = (value) => {
// 	setFull_name(value);
// };
// const changeEmail = (value) => {
// 	setEmail(value);
// };


	

	return(
		<Modal style={{ transition: "all .4s ease"}}
	  	onCancel={()=>setUpdateProfileModal(false)}
	  	visible={updateProfileModal}
	  	className="modal-updateprofile"
	  	footer= {null}
		>

			<div className="updateprofile-wrapper">

				<h1> Edit Profile </h1>
				<div className="updateprofile-wrapper__changepicture">
					<img className="updateprofile-wrapper__changepicture--image" src='' />
					<Button className="updateprofile-wrapper__changepicture--button"> Change Picture </Button>
				</div>
				
				<Form labelCol={{span: 5,}} wrapperCol={{span: 35,}} layout="vertical" className="updateprofile-wrapper__form">
		      <Form.Item label="Full Name">
		        <Input  className="updateprofile-wrapper__form--input"/>
		      </Form.Item>

		      <Form.Item label="Email">
		        <Input  className="updateprofile-wrapper__form--input"/>
		      </Form.Item>

 					<Form.Item label="Mobile Number">
		        <Input  className="updateprofile-wrapper__form--input"/>
		      </Form.Item>

 					<Form.Item label="Full Address">
		        <Input  className="updateprofile-wrapper__form--input"/>
		      </Form.Item>

		      <Form.Item label="Description">
		      	<TextArea  className="updateprofile-wrapper__form--input" 
		      	placeholder="description of your pet" />
		      </Form.Item>
					
					<Form.Item className="updateprofile-wrapper__form--button-post">
	          <Button type="primary" style={{backgroundColor: '#FF65C5', fontWeight: 'bold'}} key="submit">Save Changes</Button>
	        </Form.Item>

	        <Form.Item className="updateprofile-wrapper__form--button-cancel">
	          <Button onClick={()=>setUpdateProfileModal(false)}>Cancel</Button>
	        </Form.Item>

				</Form>
			</div>
		</Modal>
	)
}; 

export default UpdateProfileModal;