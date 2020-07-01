import React, { Fragment } from 'react';
import { Layout, Menu, Row, Avatar } from 'antd';
import './nav.css';

const { Header } = Layout;

const Nav = () => {
    return (
        <Fragment>
            <Header className="header navBar" >
                <div className="logo" >
                    <img src={require('../../assets/images/tinpet-navbar-logo.svg')} alt='tinpet-logo' />
                </div>
                <Row justify="end">
                <Menu  mode="horizontal"  collapsible="false" style={{borderBottom: 'none'}}>
                    <Menu.Item key="1" >
                        <a href='/#'><img src={require('../../assets/images/message-icon.svg')}  alt='message-icon' /></a>
                        
                    </Menu.Item>
                    <Menu.Item key="2">
                        <a href='/#'><img src={require('../../assets/images/notification-icon.svg')}  alt='notif-icon' /></a>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <a href='/#'>
                            <Avatar size={35} src={require('../../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg')}  alt='avatar-icon' />
                            {/* <img  style={{width:'35px', height:'35px'}} /></a> */} 
                        </a>
                    </Menu.Item>
                </Menu>
                </Row>
            </Header>
        </Fragment>
    );
}

export default Nav;
