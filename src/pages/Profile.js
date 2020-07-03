import React, { Fragment } from 'react';
import Nav from '../components/nav/Nav';
import { Row } from 'antd';
import '../assets/styles/homepage.css';
import ProfileComponent from '../components/profile/ProfileComponent';
import RightProfile from '../components/profile/RightProfile';


const Profile = () => {
    return (
        <Fragment>
            <Nav />
            <Row className='row-homepage' >
                <ProfileComponent />
                <RightProfile />
            </Row>
        </Fragment>
    );
}

export default Profile;

