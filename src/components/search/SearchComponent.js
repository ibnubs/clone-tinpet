import React, { Fragment } from 'react';
import './search.css';
import { Row, Col, Menu, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';


function handleMenuClick(e) {
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick} >
        <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
            3rd item
        </Menu.Item>
    </Menu>
);


const SearchComponent = () => {
    return (
        <Fragment>
            <Col className='search-component box' lg={6} md={24} sm={24} xs={24}>
                    <Row justify='center' style={{marginTop:32}} >
                        <Dropdown overlay={menu}>
                            <Button block className='btn-search' >
                                Search Location 
                                <span style={{fontSize:'0.7em', marginLeft:'1.1rem' }}>
                                    <DownOutlined />
                                </span>
                            </Button>
                        </Dropdown>
                    </Row>
                    <Row justify='center' style={{marginTop:20}} >
                        <Dropdown overlay={menu}>
                            <Button block className='btn-search' >
                                Select Animal Type
                                <span style={{fontSize:'0.7em', marginLeft:'1.1rem' }}>
                                    <DownOutlined />
                                </span>
                            </Button>
                        </Dropdown>
                    </Row>
                    <Row justify='center' style={{marginTop:20}} >
                        <Button block className='btn-search btn-search-color' >
                            Search
                        </Button>
                    </Row>
            </Col>
        </Fragment>
    );
}

export default SearchComponent;
