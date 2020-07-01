import React, { useState, useEffect, useCallback } from 'react';
import { Form, Input, Button,Select, InputNumber, Modal } from 'antd';
import { useSelector } from 'react-redux';
import './CreatePostModal.scss';

const CreatePostModal = props => {

	// //state
	const {setCreatePostModal, dispatch, createpostModal } = props
	// //store
	// const isAuthenticate = useSelector(state => state.auth.isAuthenticate)

	// const closeModal = useCallback(
	// 	() => {
	// 			setCreatePostModal (false)
	// 	}, [setCreatePostModal],
	// )

	// useEffect( () =>{
	// 	if(isAuthenticate){
	// 		closeModal()
	// 	}
	// }, [isAuthenticate, closeModal])

  return (
  	<Modal style={{ transition: "all .4s ease"}}
	  	onCancel={()=>setCreatePostModal(false)}
	  	visible={createpostModal}
	  	title = {<h1> Create a Post </h1>}
  	>
	    <div className="createpost">
	    	<h1> Create a Post </h1>
	    	<div className="createpost-wrapper">
		    	<div className="createpost-wrapper__photo">
		    		<h1> Upload Photo </h1>
		    	</div>

		    	<div 	className="createpost-wrapper__form">
			      <Form labelCol={{span: 5,}} wrapperCol={{span: 20,}} layout="vertical">

				      <Form.Item label="Pet Name">
				        <Input />
				      </Form.Item>

		      		<Form.Item >
				        <Form.Item
									label="Pet Age"
				          name="year"
				          rules={[{ required: true }]}
				          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
				        >
		          		<Input placeholder="Input birth year" />
		        		</Form.Item>

			        	<Form.Item
				        	label="Pet Category"
				          name="month"
				          rules={[{ required: true }]}
				          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
			       	 	>
				          <Select>
				          	<Select.Option value="demo"> Dog </Select.Option>
				          	<Select.Option value="demo"> Cat </Select.Option>
				          </Select>         
	        			</Form.Item>
	      			</Form.Item>

	      			<Form.Item >
	        			<Form.Item
									label="Gender"
				          name="year"
				          rules={[{ required: true }]}
				          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
	        			>
				         <Select>
				          	<Select.Option value="demo"> Male </Select.Option>
				          	<Select.Option value="demo"> Female </Select.Option>
				          </Select>
	        			</Form.Item>

	        			<Form.Item
				        	label="Breed"
				          name="month"
				          rules={[{ required: true }]}
				          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
	        			>
	          			<Input  />
	        			</Form.Item>
	      			</Form.Item>

	      			<Form.Item label="Location">
	          		<Input />
	       	 		</Form.Item>
	       
			        <Form.Item>
			          <Button type="primary" style={{ fontWeight: 'bold', backgroundColor: '#FF65C5'}}>Post</Button>
			        </Form.Item>
			        <Form.Item>
			          <Button>Cancel</Button>
			        </Form.Item>
	      		</Form>
	      	</div>
	      </div>
	    </div>
    </Modal>
  );
};

export default CreatePostModal;



