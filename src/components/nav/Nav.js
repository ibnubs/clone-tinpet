import React, { Fragment } from 'react';
import { Layout, Menu, Row, Avatar, Badge, Dropdown } from 'antd';
import './nav.css';

const { Header } = Layout;


const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="http://www.alipay.com/">Profile</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.taobao.com/">Logout</a>
        </Menu.Item>
    </Menu>
);




const Nav = () => {
    return (
        <Fragment>
            <Header className="header navBar" >
                <div className="logo" >
                    <img className="logo-img" src={require('../../assets/images/tinpet-navbar-logo.svg')} alt='tinpet-logo' />
                </div>
                <Row justify="end">
                <Menu  mode="horizontal" className='menu-item'>
                    <Menu.Item key="1" >
                        <Badge count={1} dot>
                            <a href='/#'><img src={require('../../assets/images/message-icon.svg')}  alt='message-icon' /></a>
                        </Badge>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Badge count={20} overflowCount={10}>
                            <a href='/#'><img src={require('../../assets/images/notification-icon.svg')}  alt='notif-icon' /></a>
                        </Badge>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a href='/#'>
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
