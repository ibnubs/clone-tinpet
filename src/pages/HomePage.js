import React, { Fragment } from 'react';
import Nav from '../components/nav/Nav';
import CreatePostModal from '../components/modals/CreatePostModal';
import { Row } from 'antd';
import '../assets/styles/homepage.css';
import SearchComponent from '../components/search/SearchComponent';
import FeedDisplay from '../components/feed/FeedDisplay';


const HomePage = () => {
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

