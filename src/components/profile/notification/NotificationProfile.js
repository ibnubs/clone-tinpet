import React, { Fragment  } from 'react';
import { Row, Col, Avatar, Button } from 'antd';
import './notif.css'


const NotificationProfile = () => {

    const nameLike = "Wong Chi Leek"

    return (
        <Fragment>
            <Row style={{height:'', width:'100%', margin:'40px 0px 40px 0px'}} >
                <Row style={{ width:'100%'}}>
                    <Col xl={{offset:1, span:22}} lg={{offset:2, span:20}} sm={{offset:2, span:20}} xs={{offset:4, span:18}}  className='box box-post' >
                        <Row >
                            <Col xl={4} sm={4} xs={4}  >
                                <Avatar size={100} />
                            </Col>
                            <Col className='pets-data' xl={{span:19, offset:1}} sm={{span:19, offset:1}} xs={{span:16, offset:4}}   >
                                <Row justify='center'>
                                    <p className='text-notif' > <span style={{fontWeight:'bold'}}>{nameLike}</span> liked your post </p>
                                </Row>
                                <Row justify='center' >
                                    <Button type='text' className='text-seepost'>See Post</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Row>
        </Fragment>
    );
}

export default NotificationProfile;
