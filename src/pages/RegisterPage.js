import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MobileStoreButton from 'react-mobile-store-button';
import { Link } from 'react-router-dom';
import { register } from "../store/actions/authentication";
import './RegisterPage.scss';

const RegisterPage = (props) => {
	const dispatch = useDispatch()
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] =useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	
	const submitRegister = e => {
		console.log('ada gak')
		// e.preventDefault();
		const userData = {
			username: name,
			email,
			password,
			confirm_password: confirmPassword 
		} 
		dispatch(register(userData))
	}

	return(
		<div>
			<div className="register">
				<div className="register__images">
					<img className="register__images--image-catdog" src={require('../assets/images/cat&dog.svg')} alt='catdog' />
					<img className="register__images--image-tinpet" src={require('../assets/images/tinpet-logo.svg')} alt='tinpet' />
					<h5 className="register__images--description" > Find Your Pet's Soulmate </h5>
				</div>
				<div className="register__form">
					<Form
            name="register-form"
            className="register__form--form-wrapper"
            initialValues={{ remember: true }}
            onFinish={submitRegister}
	        >
					<h1> Sign Up </h1>
	          <Form.Item 
	            name="name"
              // onFieldsChange={name}
              onChange={(e) => setName(e.target.value)}
              rules={[{ required: true, message: 'Please input your Name!' }]}
	          	>
	          	<Input className="register__form--form-input" placeholder="Name"  />
	          </Form.Item>

	          <Form.Item
              name="email"
              // onFieldsChange={email}
              onChange={(e) => setEmail(e.target.value)}
              rules={[{ required: true, message: 'Please input your Email!' }]}
		          >
		          <Input className="register__form--form-input" 
		          prefix={<UserOutlined className="site-form-item-icon" />} 
		          placeholder="Email" 
		          />
	          </Form.Item>

	          <Form.Item
              name="password"
              // onFieldsChange={password}
              onChange={(e) => setPassword(e.target.value)}
              rules={[{ required: true, message: 'Please input your Password!' }]}
	          	>
              <Input
              		className="register__form--form-input"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
              />
	          </Form.Item>

	          <Form.Item
              name="confirm-password"
              // onFieldsChange={password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              rules={[{ required: true, message: 'Please confirm your Password!' }]}
	          	>
              <Input
              		className="register__form--form-input"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Confirm Password"
              />
	          </Form.Item>
		
	          <Form.Item>
              <Form.Item name="remember" valuePropName="unchecked" noStyle>
                  <Checkbox>Remember me</Checkbox>
              </Form.Item>
	          </Form.Item>

	          <Form.Item>
	            <Button style={{ fontWeight: 'bold', backgroundColor: '#FF65C5' }} type="primary" htmlType="submit">
	                Sign Up
	            </Button>
	          </Form.Item>

	           <Form.Item className="register__form--form-button">
	          	<h5> Already have account? <Link to='/login'> Sign in </Link> </h5>
	          </Form.Item>
	        </Form>

					<div className='store'>
						<MobileStoreButton
							store='android' className='android' />
						<MobileStoreButton
							store='ios' className='ios' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default RegisterPage;