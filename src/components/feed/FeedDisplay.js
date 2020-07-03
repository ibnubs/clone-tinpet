import React, { useState, useEffect, } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Row, Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import CreatePostModal from '../modals/CreatePostModal'
import './feed.scss';
import CardFeed from './CardFeed';

import RequestMeeting from '../modals/RequestMeeting'

const FeedDisplay = (props) => {

    // const [ createPostModal, setCreatePostModal ] = useState(false);
    // const dispatch = useDispatch();

    // const openCreatePostModal = async () => {
    //     await setCreatePostModal (true)
    // }

    const [ requestMeeting, setRequestMeeting ] = useState(false);
    const dispatch = useDispatch();

    const openRequestMeeting = async () => {
        await setRequestMeeting (true)
    }
    

    return (
        <div>
            <Col className='box feed-component' lg={{ span: 17, offset: 1 }} md={24} sm={24} xs={24}>  
                <Row className='row-btn-post' >
                    <Col lg={24} xs={24}>
                        <Button className='btn-post' block  onClick={openRequestMeeting}>
                            <span style={{float:'left', marginRight:'20px'}}><PlusSquareOutlined /></span>
                            Write a post                          
                        </Button>
                        {/* <CreatePostModal
                            dispatch={dispatch}
                            createPostModal={createPostModal}
                            setCreatePostModal={setCreatePostModal}
                           
                        /> */}

                        <RequestMeeting
                            dispatch={dispatch}
                            requestMeeting={requestMeeting}
                            setRequestMeeting={setRequestMeeting}
                           
                        />  
                    </Col>
                </Row>
                <Row className='feed-post'>
                    <CardFeed />
                </Row>
            </Col>
        </div>
    );
}

export default FeedDisplay;
