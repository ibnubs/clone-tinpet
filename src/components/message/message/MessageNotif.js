import React, { Fragment, useEffect  } from 'react';
import { Row, Col, Avatar, Button } from 'antd';
import './MessageNotif.css'
import {DeleteFilled } from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import { getAllMessage } from '../../../store/actions/messages';

const MessageNotif = () => {
    const dispatch = useDispatch()
    const getAllM = useSelector(state => state?.messageTampung?.allMessage)
    
    useEffect (()=>{dispatch(getAllMessage())},[dispatch])

    const mList = getAllM.map((m)=>{
        return(
            <>
                <Row style={{height:'', width:'100%', margin:'40px 0px 40px 0px'}} >
                    <Row style={{ width:'100%'}}>
                        <Col xl={{offset:1, span:22}} lg={{offset:2, span:20}} sm={{offset:2, span:20}} xs={{offset:4, span:18}}  className='box box-post' >
                            <Row >
                                <Col xl={4} sm={4} xs={4}  >
                                    <Avatar size={90} src={m?.User?.Profile?.image_url} />
                                </Col>
                                <Col className='pets-data' xl={{span:18, offset:1}} sm={{span:18, offset:1}} xs={{span:15, offset:4}}   >
                                    <Row>
                                        <p className='m-notif' style={{fontWeight:'bold'}} > {m?.User?.Profile?.full_name} </p>
                                    </Row>
                                    <Row>
                                        <Button type='text' > {m.message} </Button>
                                    </Row>
                                </Col>
                                <Col xl={1} sm={1} xs={1} justify='end'>
                                    <DeleteFilled style={{color:'red'}} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </>
        )
    })

    return (
        <Fragment>
            {mList}
        </Fragment>
    );
}

export default MessageNotif;
