import React, {useState, Fragment} from 'react'; // useCallback, useEffect,
import { Form, Input, Button,Select, Modal, message, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined, } from '@ant-design/icons';
import { useDispatch,  } from 'react-redux'; //useSelector 
import {createPost} from '../../store/actions/createPost';
import './CreatePostModal.scss';
// import store from '../../store/index';

const CreatePostModal = (props) => {

//state
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	// const [image, setImage] = useState('')
	const [age, setAge] = useState('')
	const [category, setCategory] = useState('')
	const [gender, setGender] = useState('')
	const [breed, setBreed] = useState('')
	const [location, setLocation] = useState('')
	const [description, setDescription] = useState('')
	const { createPostModal, setCreatePostModal} = props
	const { TextArea } = Input

	// const {loading} = false
	// const [file,setFile] = useState(null)
  const [imgUpload, setImgUpload] = useState({
    loading:false,
    imgUrl: localStorage.getItem('userAvatar')
  })
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
			// image,
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

const handleChange = info => {
    if (info.file.status === 'uploading') {
      setImgUpload({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        setImgUpload({
          imageUrl,
          loading: false,
        }),
      );
    }
  };



const { imageUrl } = useState();

const uploadButton = (
  <div>
    {imgUpload.loading ? <LoadingOutlined /> : <PlusOutlined />}
    <div className="ant-upload-text">Upload your pets photo</div>
  </div>
);
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
		    		<Upload
			        name="avatar"
			        listType="picture-card"
			        className="avatar-uploader"
			        showUploadList={false}
			        beforeUpload={beforeUpload}
			        onChange={handleChange}
			      >
			        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
			      </Upload>
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

// import { Upload, message } from 'antd';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

// function getBase64(img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// }

// function beforeUpload(file) {
//   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//   if (!isJpgOrPng) {
//     message.error('You can only upload JPG/PNG file!');
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error('Image must smaller than 2MB!');
//   }
//   return isJpgOrPng && isLt2M;
// }

// class Avatar extends React.Component {
//   state = {
//     loading: false,
//   };

//   handleChange = info => {
//     if (info.file.status === 'uploading') {
//       this.setState({ loading: true });
//       return;
//     }
//     if (info.file.status === 'done') {
//       // Get this url from response in real world.
//       getBase64(info.file.originFileObj, imageUrl =>
//         this.setState({
//           imageUrl,
//           loading: false,
//         }),
//       );
//     }
//   };

//   render() {
//     const uploadButton = (
//       <div>
//         {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
//         <div className="ant-upload-text">Upload</div>
//       </div>
//     );
//     const { imageUrl } = this.state;
//     return (
//       <Upload
//         name="avatar"
//         listType="picture-card"
//         className="avatar-uploader"
//         showUploadList={false}
//         action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//         beforeUpload={beforeUpload}
//         onChange={this.handleChange}
//       >
//         {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
//       </Upload>
//     );
//   }
// }

// ReactDOM.render(<Avatar />, mountNode);