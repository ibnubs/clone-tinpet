import React, { useState, Fragment  } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Row } from 'antd';
import CreatePostModal from '../modals/CreatePostModal'
import '../feed/feed.scss';
import CardFeed from '../feed/CardFeed';

const SearchDisplay = (props) => {

    const [ createPostModal, setCreatePostModal ] = useState(false);
    const dispatch = useDispatch();

    // const openCreatePostModal = async () => {
    //     await setCreatePostModal (true)
    // }

    return (
        <Fragment>
            <Col className='box feed-component' lg={{ span: 17, offset: 1 }} md={24} sm={24} xs={24}>  
                <Row className='row-btn-post' >
                    <Col lg={24} xs={24}>
                        <h3>Found 1 Result</h3>
                        <CreatePostModal
                            dispatch={dispatch}
                            createPostModal={createPostModal}
                            setCreatePostModal={setCreatePostModal}
                        />
                    </Col>
                </Row>
                <Row className='feed-post'>
                    <CardFeed />
                </Row>
            </Col>
        </Fragment>
    );
}

export default SearchDisplay;
