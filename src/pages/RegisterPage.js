import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MobileStoreButton from 'react-mobile-store-button';
import { Link } from 'react-router-dom';
import './RegisterPage.scss';
import imagecatdog from '../assets/images/cat&dog.svg';
import imagetinpet from '../assets/images/tinpet-logo.svg';

const RegisterPage = () => {


	return(
		<div>
			<div className="register">
				<div className="register__images">
					<img className="register__images--image-catdog" src={imagecatdog} alt='' />
					<img className="register__images--image-tinpet" src={imagetinpet} alt='' />
					<h5 className="register__images--description" > Find Your Pet's Soulmate </h5>
				</div>
				<div className="register__form">
					<Form
            name="register-form"
            className="register__form--form-wrapper"
            initialValues={{ remember: true }}
            // onFinish={submitRegister}
	        >
					<h1> Sign Up </h1>
	          <Form.Item 
	            name="name"
              // onFieldsChange={name}
              // onValuesChange={(e) => setName(e.target.value)}
              rules={[{ required: true, message: 'Please input your Name!' }]}
	          	>
	          	<Input className="register__form--form-input" placeholder="Name"  />
	          </Form.Item>

	          <Form.Item
              name="email"
              // onFieldsChange={email}
              // onValuesChange={(e) => setEmail(e.target.value)}
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
              // onValuesChange={(e) => setPassword(e.target.value)}
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
              // onValuesChange={(e) => setPassword(e.target.value)}
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
	            <Button type="primary" htmlType="submit">
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