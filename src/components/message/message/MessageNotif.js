import React, { Fragment  } from 'react';
import { Row, Col, Avatar, Button } from 'antd';
import './MessageNotif.css'
import {DeleteFilled } from '@ant-design/icons';


const MessageNotif = () => {

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
                            <Col className='pets-data' xl={{span:18, offset:1}} sm={{span:18, offset:1}} xs={{span:15, offset:4}}   >
                                <Row>
                                    <p className='m-notif' style={{fontWeight:'bold'}} > {nameLike} </p>
                                </Row>
                                <Row>
                                    <Button type='text' >Kucing yang cantik bro</Button>
                                </Row>
                            </Col>
                            <Col xl={1} sm={1} xs={1} justify='end'>
                                <DeleteFilled style={{color:'red'}} />
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Row>
        </Fragment>
    );
}

export default MessageNotif;
