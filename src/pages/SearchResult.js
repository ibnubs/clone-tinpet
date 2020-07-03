import React, { Fragment } from 'react';
import Nav from '../components/nav/Nav';
import SearchComponent from '../components/search/SearchComponent';
import {Row} from 'antd';
import '../assets/styles/homepage.css';
import SearchDisplay from '../components/search/SeachDisplay';

const SearchResult = () => {
	return(
        <Fragment>
            <Nav />
            <Row className='row-homepage' >
                <SearchComponent />
                <SearchDisplay />
            </Row>
        </Fragment>
	)
}

export default SearchResult;



