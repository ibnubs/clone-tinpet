import React, { Fragment } from 'react';
import { Col, Row, Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import './feed.css';
import CardFeed from './CardFeed';

const FeedDisplay = () => {
    return (
        <Fragment>
            <Col className='box feed-component' lg={{ span: 17, offset: 1 }} md={24} sm={24} xs={24}>  
                <Row className='row-btn-post' >
                    <Col lg={24} xs={24}>
                        <Button className='btn-post' block>
                            <span style={{float:'left', marginRight:'20px'}}><PlusSquareOutlined /></span>
                            Write a post
                        </Button>
                    </Col>
                </Row>
                <Row className='feed-post'>
                    <CardFeed />
                    <CardFeed />
                </Row>
            </Col>
        </Fragment>
    );
}

export default FeedDisplay;
