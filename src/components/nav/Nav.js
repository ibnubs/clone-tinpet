import React, { Fragment } from 'react';
import { Layout, Menu, Row, Avatar, Badge, Dropdown } from 'antd';
import './nav.css';
import {Link} from 'react-router-dom';

const { Header } = Layout;


const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link to='/profile'>
                <p>Profile</p>
            </Link>
        </Menu.Item>
        <Menu.Item key="1">
            <Link to='/login'>
                <p>Logout</p>
            </Link>
        </Menu.Item>
    </Menu>
);




const Nav = () => {
    return (
        <Fragment>
            <Header className="header navBar" >
                <Link to='/homepage'>
                    <div className="logo" >
                        <img className="logo-img" src={require('../../assets/images/tinpet-navbar-logo.svg')} alt='tinpet-logo' />
                    </div>
                </Link>
                <Row justify="end">
                <Menu  mode="horizontal" className='menu-item'>
                    <Menu.Item key="1" >
                        <Badge count={1} dot>
                            <Link to='/profile'>
                                <img src={require('../../assets/images/message-icon.svg')}  alt='message-icon' />
                            </Link>
                        </Badge>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Badge count={20} overflowCount={10}>
                            <Link to='/profile'>
                                <img src={require('../../assets/images/notification-icon.svg')}  alt='notif-icon' />
                            </Link>
                        </Badge>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a href='/profile'>
                                <Avatar size={35} src={require('../../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg')}  alt='avatar-icon' />
                            </a>
                        </Dropdown>
                    </Menu.Item>
                </Menu>
                </Row>
            </Header>
        </Fragment>
    );
}

export default Nav;
