import React, { Fragment, useEffect } from 'react';
import { Col, Row, Button } from 'antd';
import {Link} from 'react-router-dom';
import './right-profile.css';
import PostCard from './post/PostCard';
import NotificationProfile from './notification/NotificationProfile';
import MessageNotif from './message/MessageNotif';
import { useDispatch } from "react-redux";
import { getSinglePets } from '../../store/actions/profile';


const RightProfile = () => {
    const dispatch = useDispatch()
    // const ownPets = useSelector(state => state.profile.petsDetail)
    

    useEffect(() => {
        dispatch ( getSinglePets() )
    }, [dispatch])

    return (
        <Fragment>
            <Col className='box-right-profile feed-component' lg={{ span: 17, offset: 1 }} md={24} sm={24} xs={24}>  
                <Row className='row-profile' justify='center' >
                    <Link to='#'>
                        <Button type='text' className='btn-right-profile'>Post</Button>
                    </Link>
                    <Link to='#'>
                        <Button type='text' className='btn-right-profile'>Notification</Button>
                    </Link>
                    <Link to='#'>
                        <Button type='text' className='btn-right-profile'>Message</Button>
                    </Link>
                </Row>
                <Row className='feed-post'>
                    <PostCard />
                    <NotificationProfile />
                    <MessageNotif />
                </Row>
            </Col>
        </Fragment>
    );
}

export default RightProfile;
