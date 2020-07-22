import React, { useCallback, useEffect, useState, Fragment } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { useSelector } from 'react-redux';
import './RequestMeeting.scss';
import { useDispatch } from "react-redux";
import {request} from '../../store/actions/reqmeeting'

const RequestMeeting = (props) => {

	const {setRequestMeeting, requestMeeting } = props
	const dispatch = useDispatch()
	const [date, setDate] = useState("")
	const [hour, setHour] = useState("")
	const [message, setMessage] = useState("")
	const [location, setLocation] = useState("")

	const { TextArea } = Input;

	 //store
	// const loading = useSelector(state => state.auth.loading)
	const isAuthenticate = useSelector(state => state.auth.isAuthenticate)
	// const updateStatus = useSelector( state => state.auth.updateStatus)
	const closeModal = useCallback(
		() => {
				setRequestMeeting (false)
		}, [setRequestMeeting],
	)

	useEffect( () =>{
		if(isAuthenticate){
			closeModal()
		}
	}, [isAuthenticate, closeModal])

	const submitRequest = e => {

		e.preventDefault()
		const userData = {
			date,
			hour,
			message,
			location
		}
		console.log("data", userData)
		dispatch(request(userData, props.id))
	}


  return (
  	<Modal style={{ transition: "all .4s ease"}}
	  	onCancel={()=>setRequestMeeting(false)}
	  	visible={requestMeeting}
	  	className="modal-reqmeeting"
	  	footer={null}
		>
		<Fragment>
	    <div className="reqmeeting">
	    	<div className="reqmeeting__header">
	    		<h1> Request Meeting </h1>    		
	    	</div>
	    	
		    	<div 	className="reqmeeting-wrapper__form">
			      <Form labelCol={{span: 5,}} wrapperCol={{span: 35,}} layout="vertical"
				  onFinish={submitRequest}>

		      		<Form.Item className="form">
				        <Form.Item
						  label="Date"
				          name="date"
						  onChange={(e) => setDate(e.target.value)}
						  style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
				        >
		          		<Input placeholder="Input birth date" />
		        		</Form.Item>

			        	<Form.Item
				          label="Hour"
						  name="hour"
						  onChange={(e) => setHour(e.target.value)}
				          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
			       	 	>
				        <Input placeholder="Input birth hour" />       
	        			</Form.Item>
	      			</Form.Item>

					<Form.Item 
						className="form"
					   	label="Leave a Message"
						onChange={(e) => setMessage(e.target.value)}>
						<TextArea rows={6} placeholder="Leave a Message
						" required />
				    </Form.Item>
	      			
					<Form.Item label="Location"  className="form"
					onChange={(e) => setLocation(e.target.value)}>
	          		<Input placeholder="Input your location"/>
	       	 		</Form.Item>
	       			<hr />
	       			
				    <Form.Item className="button_post">
						<Button onClick={submitRequest}
						type="primary" style={{ fontWeight: 'bold', backgroundColor: '#FF65C5', width: '60px'}}
				         key="submit">Request</Button>
				    </Form.Item>

				    <Form.Item className="button_cancel">
				        <Button onClick={()=>setRequestMeeting(false)}>Cancel</Button>
				    </Form.Item>
			   	  </Form>
	      	</div>
	      </div>
		</Fragment>  
    </Modal>
  );
};

export default RequestMeeting;


