import React, { Fragment } from 'react';
import './profile-comp.css';
import { Col,  Avatar, Row, Button } from 'antd';


const ProfileComponent = () => {
    return (
        <Fragment>
            <Col className='profile-component box-profile' lg={6} md={24} sm={24} xs={24}>
                <Row justify="center" style={{marginTop:50}}>
                    <Avatar className='img-profile'  />
                </Row>
                <Row justify='center'>
                    <p className='name-profile'>John Terbang</p>
                    <p className='desc-profile'>Aktif berperan dalam animal rescue dan memelihara cat and dog dirumah</p>
                        <Button type='text' style={{margin:'2em 0px'}}>
                            <p className='text-edit-profile'>
                                Edit Profile
                            </p>
                        </Button>
                </Row>
                
            </Col>
        </Fragment>
    );
}

export default ProfileComponent;
