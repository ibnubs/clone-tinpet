import React, { Fragment, useState, useEffect, createElement } from 'react';
import { Row, Col, Avatar, Button } from 'antd';
import { HeartFilled, HeartOutlined, MessageOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import RequestMeeting from '../../components/modals/RequestMeeting'
import { getAllPets, likeById } from '../../store/actions/post';
import './feed.scss';

const CardFeed = (props) => {
	const dispatch = useDispatch()
    const [ requestMeeting, setRequestMeeting ] = useState(false);
    //like data
    // const [likes, setLikes] = useState(0);
    const [action, setAction] = useState('null')
    const pets = useSelector(state => state.post.pets)
    // console.log(pets, 'ini pets')
    
    const openRequestMeeting = async () => {
        await setRequestMeeting (true)
    }
    
    useEffect(() => {
        dispatch(getAllPets())
    }, [dispatch])

    //handle like
    
    
    // const like = () => {
    //     (likes == 0 ? setLikes(1) : setLikes(0) )
    //     (action === 'liked' ? setAction('null') : setAction('liked'))
    //     // dispatch = ({type:})
    // }

    const handleLike = (pets_id) => {
        // (likes === 0 ? setLikes(1) : setLikes(0) )
        (action === 'liked' ? setAction('null') : setAction('liked'))
        likeById(pets_id)
    }

const petList = pets.map((item) =>{
    return(
        <Row style={{height:'', width:'100%', margin:'40px 32px 40px 32px'}} key={item.id} >
        <Row style={{ width:'100%'}}>
            <Col span={2} >
                <a href='/#'>
                    <Avatar size={80} src={item.Profile.image_url}  alt='avatar-icon' />
                </a>
            </Col>
            <Col xl={{offset:1, span:21}} lg={{offset:2, span:20}} sm={{offset:2, span:20}} xs={{offset:4, span:18}}  className='box box-post' >
                <Row >
                    <Col xl={8} md={12} sm={{span:24}} xs={{span:24}} >
                        <img alt='cat-sample' src={item.image_url} style={{height:248, width:'100%', borderRadius:'15px'}}  />
                    </Col>
                    <Col className='pets-data' xl={{span:15, offset:1}} md={{span:11, offset:1}} sm={{span:24}} xs={{span:24}}  >
                        <Row>
                            <Col span={12}>
                                <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Name</p>
                                <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px'}}>{item.name} </p>
                            </Col>
                            <Col span={12}>
                                <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}}>Gender</p>
                                <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px'}}> {item.gender} </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Age</p>
                                <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px'}}> {item.age} </p>
                            </Col>
                            <Col span={12}>
                                <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Category</p>
                                <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px'}}> {item.Search.category} </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Location</p>
                                <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px', paddingRight:'20px'}}> {item.Search.location} </p>
                            </Col>
                            <Col span={12}>
                                <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Status</p>
                                <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px'}}> {item.status} </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Description</p>
                                <p style={{fontWeight:'600', fontSize:'16px',marginTop:'-5px', lineHeight:'22px', textAlign:'justify'}}>
                                    {item.description}
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ marginTop:'10px'}}>
                    <Col  xl={8} md={12} sm={{span:24}} xs={{span:24}} style={{width:'297px', height:'80px', borderRadius:'15px'}}>
                        <Row>
                            <p className='likes-comment' > {item.likeCounter} Likes</p>
                            <p className='likes-comment' > {item.commentCounter} Comments</p>
                        </Row>
                        <Row>
                            <span onClick={()=>{handleLike(item.id)}} style={{fontSize:'1.7rem', marginRight:'1.2rem', color:'', cursor:'pointer' }}>
                                {createElement(action === 'liked' ? <HeartFilled style={{color:'red'}} />  : HeartOutlined  )}
                            </span>

                            {/* <Button type='text'>
                                <HeartFilled href="www.google.co.id" twoToneColor="#eb2f96" style={{fontSize:'1.7rem', marginRight:'1.2rem', color:'', cursor:'pointer' }} />
                            </Button> */}
                            <span>
                                <MessageOutlined style={{fontSize:'1.7rem', marginTop:'.4rem'}} />
                            </span>
                        </Row>
                    </Col>
                    <Col xl={{span:15, offset:1}} md={{span:11, offset:1}} sm={{span:24}} xs={{span:24}} >
                        <Button block className='btn-rqsmeet' onClick={openRequestMeeting} >Request Meeting</Button>
                        <RequestMeeting
                            dispatch={dispatch}
                            requestMeeting={requestMeeting}
                            setRequestMeeting={setRequestMeeting}
                        /> 
                    </Col>
                </Row>
            </Col>
        </Row>
    </Row>
    )})
    
    return (
        <Fragment>
            {petList}
        </Fragment>
    );
}

export default CardFeed;
