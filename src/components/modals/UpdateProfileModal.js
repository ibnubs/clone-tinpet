import React, { useState, useEffect, useCallback} from 'react';
import { Modal, Form, Input, Button, message, Upload, Avatar} from 'antd';
import { LoadingOutlined, PlusOutlined, UserOutlined} from '@ant-design/icons'; //editoutlined
import './UpdateProfileModal.scss';
import { useSelector, useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';
import { getProfile } from '../../store/actions/profile';
import { editProfile } from '../../store/actions/editProfile';
import swal from 'sweetalert2';
const {TextArea} = Input;

const UpdateProfileModal = (props) => {
		 //state
	const {setUpdateProfileModal, updateProfileModal } = props

	
	const closeModal = useCallback(
		() => {
				setUpdateProfileModal (false)
		}, [setUpdateProfileModal],
	)

	// state update profile

	// const [full_name, setFull_name] = useState(profile.profilaDetail.full_name);
	// const [email, setEmail] = useState(profile.profileDetail.email);
	// const changeFull_name = (value) => {
	// 	setFull_name(value);
	// };
	// const changeEmail = (value) => {
	// 	setEmail(value);
	// };
	const editProfile = useSelector( state => state.getProfile)
	const dispatch = useDispatch();
	const history = useHistory();
	const profile = useSelector((state) => state.profileReducer);
	const [full_name, setFull_name] = useState('')
	const [email, setEmail] = useState('')
	const [imagePreview, setImagePreview] = useState('');
	const [mobile_number, setMobile_number] = useState();
	const [full_address, setFull_address] = useState('');
	const [description, setDescription] = useState('');

	// const onChangeImage = (e) => {
	// 	setImage(e.target.files[0])
	// }

	const saveChanges = (e) => {
		// e.preventDefault();
		let data = new FormData();
		data.append('full_name', full_name)
		data.append('email', email)
		data.append('image', selectedFile)
		data.append('mobile_number', mobile_number)
		data.append('full_address', full_address)
		data.append('description', description)
		dispatch(saveChanges(data))
	}

	const [selectedFile, setSelectedFile] = useState(null);
	const onChangeImage = e => {
		e.preventDefault();
		let reader = new FileReader();
		const file = e.target.files[0]
		reader.onloadend = () => {
			setSelectedFile(file);
			setImagePreview(reader.result);
		};
		reader.readAsDataURL(file);
	}

	useEffect(()=> {
		dispatch(getProfile());
	}, [dispatch]);

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
					{/*// <label for="file" className="updateprofile-wrapper__changepicture--image"> 
					// <Avatar icon={<UserOutlined />}
					// style={{cursor:"pointer", borderRadius:"50%"}} src={image} size={260}/> </label>*/}
					
					<input 
						type="file"
						name="image"
						onChange={onChangeImage}
					/>
					<Button className="updateprofile-wrapper__changepicture--button"> Change Picture </Button>
				</div>
				
				<Form labelCol={{span: 5,}} wrapperCol={{span: 35,}} layout="vertical" className="updateprofile-wrapper__form">
		      <Form.Item label="Full Name" onChange={(e)=> setFull_name(e.target.value)}>
		        <Input  className="updateprofile-wrapper__form--input"/>
		      </Form.Item>

		      <Form.Item label="Email" onChange={(e)=> setEmail(e.target.value)}>
		        <Input  className="updateprofile-wrapper__form--input"/>
		      </Form.Item>

 					<Form.Item label="Mobile Number" onChange={(e)=> setMobile_number(e.target.value)}>
		        <Input  className="updateprofile-wrapper__form--input"/>
		      </Form.Item>

 					<Form.Item label="Full Address" onChange={(e)=> setFull_address(e.target.value)}>
		        <Input  className="updateprofile-wrapper__form--input"/>
		      </Form.Item>

		      <Form.Item label="Description" onChange={(e)=> setDescription(e.target.value)}>
		      	<TextArea  className="updateprofile-wrapper__form--input" 
		      	placeholder="description of your pet" />
		      </Form.Item>
					
					<Form.Item className="updateprofile-wrapper__form--button-post">
	          <Button onClick={saveChanges} type="primary" style={{backgroundColor: '#FF65C5', fontWeight: 'bold'}} key="submit">Save Changes</Button>
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