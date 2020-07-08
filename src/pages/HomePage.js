import React, { Fragment, useEffect } from 'react';
import Nav from '../components/nav/Nav';
import CreatePostModal from '../components/modals/CreatePostModal';
import { Row } from 'antd';
import '../assets/styles/homepage.css';
import SearchComponent from '../components/search/SearchComponent';
import FeedDisplay from '../components/feed/FeedDisplay';
import {useDispatch} from 'react-redux';
import {getAllPets} from '../store/actions/post';

const HomePage = () => {
    const dispatch = useDispatch()

    const getAll = () => {
        dispatch({
            type: 'GET_ALL_POST',
        })
    }

    useEffect(() => {
        dispatch(getAllPets())
    }, [])
    
    return (
        <Fragment>
            <Nav />
            <Row className='row-homepage' >
                <SearchComponent />
                <FeedDisplay />
            </Row>
            <CreatePostModal />
        </Fragment>
    );
}

export default HomePage;

