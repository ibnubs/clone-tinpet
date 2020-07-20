import React, { useState, Fragment  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { Col, Row } from 'antd';
import '../feed/feed.scss';
// import CardFeed from '../feed/CardFeed';

const SearchDisplay = (props) => {

    const location = useSelector( state => state.searchPet.location);
    const category = useSelector( state => state.searchPet.category);
    const {id} = useParams(); 
    const dispatch = useDispatch();

    return (
        <Fragment>
            <Col className='box feed-component' lg={{ span: 17, offset: 1 }} md={24} sm={24} xs={24}>  
                <Row className='row-btn-post' >
                    <Col lg={24} xs={24}>
                        <h3>Found 1 Result</h3>
                    </Col>
                </Row>
                <Row className='feed-post'>
                    {/*<CardFeed />*/}
                </Row>
            </Col>
        </Fragment>
    );
}

export default SearchDisplay;
