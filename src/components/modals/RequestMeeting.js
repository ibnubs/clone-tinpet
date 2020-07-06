import React, { useCallback, useEffect} from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { useSelector } from 'react-redux';
import './RequestMeeting.scss';

const RequestMeeting = (props) => {

	 //state
	const {setRequestMeeting, requestMeeting } = props
	// const [ isLoading, setIsLoading ] = useState(false)
	// const [file, setFile ] =useState(null)
	// const [imgUpload, setImgUpload] = useState ({
	// 	loading: false,
	// 	imgUrl: localStorage.getItem('userAvatar')
	// })

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


  return (
  	<Modal style={{ transition: "all .4s ease"}}
	  	onCancel={()=>setRequestMeeting(false)}
	  	visible={requestMeeting}
	  	className="modal"
	  	footer='null'
		>
	    <div className="createpost">
	    	<div className="createpost__header">
	    		<h1> Request Meeting </h1>    		
	    	</div>
	    	
		    	<div 	className="createpost-wrapper__form">
			      <Form labelCol={{span: 5,}} wrapperCol={{span: 35,}} layout="vertical">

				    

		      		<Form.Item className="form">
				        <Form.Item
						  label="Date"
				          name="date"
				          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
				        >
		          		<Input placeholder="Input birth date" />
		        		</Form.Item>

			        	<Form.Item
				          label="Hour"
				          name="hour"
				          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
			       	 	>
				        <Input placeholder="Input birth hour" />       
	        			</Form.Item>
	      			</Form.Item>

					<Form.Item 
						className="form"
					   	label="Leave a Message">
						<TextArea rows={6} placeholder="Leave a Message
						" required />
				    </Form.Item>
	      			
					<Form.Item label="Location"  className="form">
	          		<Input placeholder="Input your location"/>
	       	 		</Form.Item>
	       			<hr />
	       			
				        <Form.Item className="button_post">
				          <Button type="primary" style={{ fontWeight: 'bold', backgroundColor: '#FF65C5', width: '60px'}}
				           key="submit">Request</Button>
				        </Form.Item>
				        <Form.Item className="button_cancel">
				          <Button onClick={()=>setRequestMeeting(false)}>Cancel</Button>
				        </Form.Item>
			   	  </Form>
	      	</div>
	      </div>

	    
    </Modal>
  );
};

export default RequestMeeting;


