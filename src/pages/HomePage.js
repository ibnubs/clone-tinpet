import React, { Fragment } from 'react';
import Nav from '../components/nav/Nav';
import { Row } from 'antd';
import '../assets/styles/homepage.css';
import SearchComponent from '../components/search/SearchComponent';
import FeedDisplay from '../components/feed/FeedDisplay';



const Homepage = () => {
    return (
        <Fragment>
            <Nav />
            <Row className='row-homepage' >
                <SearchComponent />
                <FeedDisplay />
            </Row>

        </Fragment>
    );
}

export default Homepage;

