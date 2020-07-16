import React, {useState, Fragment} from 'react'; // useCallback, useEffect,
import { Form, Input, Button,Select, Modal, Avatar } from 'antd'; // message, Upload,
import {  UserOutlined} from '@ant-design/icons'; //LoadingOutlined, PlusOutlined,
import { useDispatch } from 'react-redux'; //, useSelector
// import { useHistory } from 'react-router-dom'; 
import {createPost} from '../../store/actions/createPost';
import './CreatePostModal.scss';

// function getBase64(img, callback){
// 	const reader = new FileReader();
// 	reader.addEventListener("load", () => callback(reader.result));
// 	reader.readAsDataURL(img);
// 	console.log(reader.result)
// }

const CreatePostModal = (props) => {

//state
	// const createPosts = useSelector (state => state.createPost.pets)
	const dispatch = useDispatch()
	// const history = useHistory();
	const [name, setName] = useState('')
	const [age, setAge] = useState()
	const [image, setImage] = useState(null)
	const [category, setCategory] = useState('')
	const [gender, setGender] = useState('')
	const [breed, setBreed] = useState('')
	const [location, setLocation] = useState('')
	const [description, setDescription] = useState('')
	const { createPostModal, setCreatePostModal} = props
	const { TextArea } = Input


	const submitCreatePost  = (e) => {
		e.preventDefault();
		console.log('test', name, age, image, category, gender, breed, location, description)
		let data = new FormData();
		data.append("name", name)
		data.append("age", age)
		data.append("image", image)
		data.append("category", category)
		data.append("gender", gender)
		data.append("breed", breed)
		data.append("location", location)
		data.append("description", description)

		console.log('userdata', data)
		dispatch(createPost(data,))
		setCreatePostModal(false)
		//dispatch get all data
		
	}

	const submitCategory = async (value) => {
		await setCategory(value)
	}

	const submitGender = async (value) => {
		await setGender(value)
	}

	const onChange = (e) => {
		console.log('image', e.target.files) 
		setImage(e.target.files[0])
	}

  return (
  	<Modal style={{ transition: "all .4s ease"}}
	  	onCancel={()=>setCreatePostModal(false)}
	  	visible={createPostModal}
	  	className="modal-createpost"
	  	footer={null}
		>
	    <Fragment>
	    	<div className="createpost__header">
	    		<h1> Create a Post </h1>    		
	    	</div>
	    	<div className="createpost-wrapper">	    		
		    	<div className="createpost-wrapper__photo">		    				  
      			<div>
				    	<label for="image"> <Avatar icon={<UserOutlined />} 
				    	style={{cursor: "pointer", borderRadius:"50%", marginRight: "30px", marginLeft: '10px'}} 
				    	src={image} size={260}/> </label>     			
      				<input
      					id="image"
				    		type ="file"
				    		name ="image"
				    		style= {{display: 'none'}}
				    		onChange={onChange}
				    		placeholder="Upload your photo"
				    	/> 		
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

