import React, { Fragment, useEffect } from 'react';
import { Col, Row, Button } from 'antd';
import {Link} from 'react-router-dom';
import './right-profile.css';
import PostCard from './post/PostCard';
import { useDispatch, useSelector } from "react-redux";
import { getSinglePets } from '../../store/actions/getSinglePets';


const RightProfile = () => {
    
    const dispatch = useDispatch()
    const singlePets = useSelector(state => state.getSinglePets.petsDetail)
    console.log(singlePets, 'single pets dari component')
    
    useEffect(() => {
        dispatch ( getSinglePets() )
    }, [dispatch])

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
                    <PostCard singlePets={singlePets} />
                </Row>
            </Col>
        </Fragment>
    );
}

export default RightProfile;
