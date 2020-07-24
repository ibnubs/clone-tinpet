import React, {useState, Fragment } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import {postMessages} from '../../store/actions/messages';

const PostMessages = (props) => {
	const {postMessage, setPostMessage } = props
	const dispatch = useDispatch()
	const [message, setMessage] = useState('')

	const sendMessage = e => {
		e.preventDefault();
		const userData = {
			message
		}
		console.log(userData, 'userdata')
		dispatch(postMessages(userData, props.id))
		setPostMessage(false)
	}


	const {TextArea} = Input;

	return (
		<Modal style={{ transition: "all .4s ease"}}
	  	onCancel={()=>setPostMessage(false)}
	  	visible={postMessage}
	  	className="modal-post-message"
	  	footer={null}
		>
			<Fragment>
				<div className="post-message">
					<h1> Send a Message </h1>
					<Form labelCol={{span: 5,}} wrapperCol={{span: 35,}} layout="vertical" onFinish={sendMessage}>
						<Form.Item
							label="Message"
							name="message"
							onChange={(e) => setMessage(e.target.value)}
							style={{ display: 'inline-block', width: 'calc(50% - 8px)'}}
						>
							<TextArea rows={6} placeholder="Type your message here" required />
							<Button onClick ={sendMessage}>Send</Button>
						</Form.Item>
					</Form>
				</div>
			</Fragment>
		</Modal>
	)
}

export default PostMessages;