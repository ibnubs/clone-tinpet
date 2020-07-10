import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './profile-comp.css';
import { Col,  Avatar, Row, Button } from 'antd';
import UpdateProfileModal from './../modals/UpdateProfileModal';
import { getProfile } from '../../store/actions/profile';


const ProfileComponent = (props) => {
    const [ updateProfileModal, setUpdateProfileModal] = useState(false);
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile.profileDetail)

    const openUpdateProfileModal = async () => {
        await setUpdateProfileModal (true)
    }
    
    useEffect(() => {
        dispatch(getProfile())
        return () => {
        }
    }, [dispatch])

    return (
        <Fragment>
            <Col className='profile-component box-profile' lg={6} md={24} sm={24} xs={24}>
                <Row justify="center" style={{marginTop:50}}>
                    <Avatar className='img-profile' src={profile.image_url} />
                </Row>
                <Row justify='center'>
                    <p className='name-profile'> {profile.full_name} </p>
                    <p className='desc-profile'> {profile.description} </p>
                        <Button type='text' style={{margin:'2em 0px'}} onClick={openUpdateProfileModal}>
                            <p className='text-edit-profile'>
                                Edit Profile
                            </p>
                        </Button>
                        <UpdateProfileModal
                            dispatch={dispatch}
                            updateProfileModal={updateProfileModal}
                            setUpdateProfileModal={setUpdateProfileModal}
                        />

                </Row>
                
            </Col>
        </Fragment>
    );
}

export default ProfileComponent;
