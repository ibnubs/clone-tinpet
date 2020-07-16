import React, { Fragment } from 'react';
import { Col, Row, Button } from 'antd';
import {Link} from 'react-router-dom';
import './right-notif.css';
import NotificationProfile from './notification/NotificationProfile';

const RightNotif = () => {
    
    return (
        <Fragment>
            <Col className='box-right-profile feed-component' lg={{ span: 17, offset: 1 }} md={24} sm={24} xs={24}>  
                <Row className='row-profile' justify='center' >
                    <Link to='/profile'>
                        <Button type='text' className='btn-right-profile'>Post</Button>
                    </Link>
                    <Link to='/notif'>
                        <Button type='text' className='btn-right-profile'>Notification</Button>
                    </Link>
                    <Link to='/message'>
                        <Button type='text' className='btn-right-profile'>Message</Button>
                    </Link>
                </Row>
                <Row className='feed-post'>
                    <NotificationProfile />
                </Row>
            </Col>
        </Fragment>
    );
}

export default RightNotif;
