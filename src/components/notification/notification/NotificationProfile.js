import React, { Fragment, useEffect  } from 'react';
import { Row, Col, Avatar, Button } from 'antd';
import './notif.css'
import {DeleteFilled } from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux'
import { notifDetail, deleteNotif } from '../../../store/actions/notif';
import { approved, rejected } from '../../../store/actions/reqmeeting';
import {Link} from 'react-router-dom';

const NotificationProfile = () => {
    const dispatch = useDispatch()
    const detailNotifShow = useSelector(state => state?.notif?.detailNotif)
    

    useEffect(() => {
        dispatch(notifDetail())
        
    }, [dispatch])

    const approveReq =  (id)  => {
    console.log(id, 'id')
    dispatch(approved(id));
    }

    const rejectReq =  (id)  => {
    console.log(id, 'id')
    dispatch(rejected(id));
    }

    const notifList = detailNotifShow.map((n) => {
        console.log(detailNotifShow, 'ini')
        //handling message notif
        const messageNotif = n?.detailNotif?.type
        let message, reqmeetview;
            if(messageNotif === 'like' ){
                message = 'liked your post'
            }  else if(messageNotif === 'comment'){
                message = 'comment on your post'
            }  else if (messageNotif === 'request'){
                message = 'request meeting on your post'
                reqmeetview = 
                <div className="button-reqmeeting">
                    <Button type="primary" onClick={()=>approveReq(n.detailNotif.PetId)}> Approved </Button> 
                    <Button onClick={()=>rejectReq(n.detailNotif.PetId)}> Rejected </Button>
                </div>
            }  else {
                message = "there's not notification"
            }


        //handling delete notif
    const delNotif = async (id)  => {
        await dispatch( deleteNotif(id));
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
                                        <Link to='/profile'>
                                            <Button type='text' className='text-seepost'>See Post</Button>
                                        </Link>    
                                    {reqmeetview}
                                    </Row>
                                </Col>
                                <Col xl={1} sm={1} xs={1} justify='end'>
                                    <DeleteFilled style={{color:'red', cursor: 'pointer'}} 
                                        onClick={()=>delNotif(n?.detailNotif?.id)}
                                    />
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
