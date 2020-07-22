import React, { Fragment, useState } from 'react';
import {useDispatch} from 'react-redux';
import './search.css';
import { Row, Col, Button, Form, Input } from 'antd';
import {useHistory} from 'react-router-dom';
import {searchPet} from '../../store/actions/searchPet';


const SearchComponent = () => {

    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')
    const history = useHistory();
    const dispatch = useDispatch()

    const searchButton = (e) => {
        e.preventDefault()
       const userData = {
        location, category
       }
        dispatch(searchPet(userData))
        history.push("/searchresult")
    }

    return (
        <Fragment>
            <Col className='search-component box-search' lg={6} md={24} sm={24} xs={24}>
                    <Row justify='center' style={{marginTop:32}} >
                        <Form onChange={(e) => setLocation(e.target.value)} className="btn-search">
                            <Input className="input-search"type='text' placeholder='Search Location'/>
                        </Form>
                    </Row>
                    <Row justify='center' style={{marginTop:20}} >
                        <Form onChange={(e) => setCategory(e.target.value)} className="btn-search">
                            <Input className="input-search"type='text' placeholder='Input Animal Type'/>
                        </Form>
                    </Row>
                    <Row justify='center' style={{marginTop:20}} >
                        <Button block onClick={searchButton} className='btn-search btn-search-color' >
                             Search
                        </Button>
                    </Row>
            </Col>
        </Fragment>
    );
}

export default SearchComponent;


