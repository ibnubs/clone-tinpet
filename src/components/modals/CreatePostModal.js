import React, {useState, useCallback, useEffect, Fragment} from 'react'; 
import { Form, Input, Button,Select, Modal, message, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined, } from '@ant-design/icons';
import { useDispatch, useSelector  } from 'react-redux';
import {createPost} from '../../store/actions/createPost';
import './CreatePostModal.scss';
// import store from '../../store/index';

const CreatePostModal = (props) => {

//state
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const [image, setImage] = useState('')
	const [age, setAge] = useState('')
	const [category, setCategory] = useState('')
	const [gender, setGender] = useState('')
	const [breed, setBreed] = useState('')
	const [location, setLocation] = useState('')
	const [description, setDescription] = useState('')
	const { createPostModal, setCreatePostModal} = props

	const { TextArea } = Input;

//store



// const closeModal = useCallback(
// 		() => 
// 				setCreatePostModal (false)
// 		}, [setCreatePostModal],
// 	)

const submitCreatePost  = e => {
		console.log('ada gak')
		// e.preventDefault();
		const userData = {
			name,
			image,
			age,
			gender,
			breed,
			location,
			category,
			description
		}
		console.log('userdata', userData)
		dispatch(createPost(userData))
	}


const submitCategory = async (value) => {
	console.log("ada select gak",value)
	await setCategory(value)
	console.log(category)
}

const submitGender = async (value) => {
	console.log("ada gender gak", value)
	await setGender(value)
	console.log(value)
}

  return (

  	<Modal style={{ transition: "all .4s ease"}}
	  	onCancel={()=>setCreatePostModal(false)}
	  	visible={createPostModal}
	  	className="modal"
	  	footer='null'
		>
	    <Fragment>

	    	<div className="createpost__header">
	    		<h1> Create a Post </h1>    		
	    	</div>

	    	<div className="createpost-wrapper">

		    	<div className="createpost-wrapper__photo">
		    		
      			<div>
      				<Button type="primary" 
      				style={{background: '#3E4C6F', margin: '20px', width: '300px', 
      				height: '40px',fontWeight: 'bold', borderRadius: '5px'}}> 
      				Upload Photo </Button>
      			</div> 

		    	</div>

		    	<div 	className="createpost-wrapper__form">

			      <Form labelCol={{span: 5,}} wrapperCol={{span: 35,}} layout="vertical"
						initialValues={{ remember: true }}
            onFinish={submitCreatePost}
			      >

				      <Form.Item label="Pet Name"
							onChange={(e)=> setName(e.target.value)}
				      >
				        <Input placeholder="Input your pet's name" className="input"/>
				      </Form.Item>

		      		<Form.Item className="form">
				        <Form.Item
									label="Pet Age"
				          name="Pet Age"
				          onChange={(e)=> setAge(e.target.value)}
				          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
				        >
		          		<Input placeholder="Input your pet's birth" />
		        		</Form.Item>

			        	<Form.Item
				        	label="Pet Category"
				          name="Pet Category"
				          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
			       	 	>
				          <Select onChange={submitCategory}>
				          	<Select.Option  value="Dog" > Dog </Select.Option>
				          	<Select.Option  value="Cat"> Cat </Select.Option>
				          </Select>         
	        			</Form.Item>
	      			</Form.Item>

	      			<Form.Item className="form">
	        			<Form.Item  
									label="Gender"
				          name="Gender"
				          style={{ display: 'inline-block', width: 'calc(50% - 8px)', }}
	        			>
				         <Select onChange={submitGender}>
				          	<Select.Option value="Male"> Male </Select.Option>
				          	<Select.Option value="Female"> Female </Select.Option>
				          </Select>
	        			</Form.Item>

	        			<Form.Item  
				        	label="Breed"
				          name="Breed"
				          onChange={(e)=> setBreed(e.target.value)}
				          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
	        			>
	          			<Input placeholder="Input your pet's breed" />
	        			</Form.Item>
	      			</Form.Item>

	      			<Form.Item label="Description"  className="form"
	      			onChange={(e)=> setDescription(e.target.value)}>
	      			<TextArea rows={6} className="input" placeholder="Description of your pets" required />
	      			
	       	 		</Form.Item>

	      			<Form.Item label="Location"  className="form"
	      			onChange={(e)=> setLocation(e.target.value)}
	      			>
	          		<Input placeholder="Input your location" className="input"/>
	       	 		</Form.Item>
	       			<hr />
	       			
			        <Form.Item className="button_post">
			          <Button type="primary" style={{ fontWeight: 'bold', backgroundColor: '#FF65C5', width: '60px'}}
			           key="submit" onClick={submitCreatePost}>Post</Button>
			        </Form.Item>
			        <Form.Item className="button_cancel">
			          <Button onClick={()=>setCreatePostModal(false)}>Cancel</Button>
			        </Form.Item>
			   	  </Form>
	      	</div>
	      </div>

	    </Fragment>    
    </Modal>

  );
};

export default CreatePostModal;
