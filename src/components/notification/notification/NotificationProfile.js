import React, { Fragment, useEffect  } from 'react';
import { Row, Col, Avatar, Button } from 'antd';
import './notif.css'
import {DeleteFilled } from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux'
import { notifDetail } from '../../../store/actions/notif';

const NotificationProfile = () => {
    const dispatch = useDispatch()
    const detailNotifShow = useSelector(state => state?.notif?.detailNotif)
    

    useEffect(() => {
        dispatch(notifDetail())
        
    }, [dispatch])

    const notifList = detailNotifShow.map((n) => {

        //handling message notif
        const messageNotif = n?.detailNotif?.type
        let message;
            if(messageNotif === 'like' ){
                message = 'liked your post'
            }  else if(messageNotif === 'comment'){
                message = 'comment on your post'
            }  else if (messageNotif === 'request'){
            }  else {
                message = "there's not notification"
            }
        

        return(
            <>
                <Row style={{height:'', width:'100%', margin:'40px 0px 40px 0px'}} >
                    <Row style={{ width:'100%'}}>
                        <Col xl={{offset:1, span:22}} lg={{offset:2, span:20}} sm={{offset:2, span:20}} xs={{offset:4, span:18}}  className='box box-post' >
                            <Row  >
                                <Col xl={4} sm={4} xs={4}  >
                                    <Avatar size={90} src={n?.detailUser?.Profile?.image_url} />
                                </Col>
                                <Col className='pets-data' xl={{span:18, offset:1}} sm={{span:18, offset:1}} xs={{span:15, offset:4}}   >
                                    <Row justify='center'>
                                        <p className='text-notif' > <span style={{fontWeight:'bold'}}> {n?.detailUser?.Profile?.full_name} </span> {message} </p>
                                    </Row>
                                    <Row justify='center' >
                                        <Button type='text' className='text-seepost'>See Post</Button>
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
            {notifList}
        </Fragment>
    );
}

export default NotificationProfile;
