import React, { Fragment, useState } from 'react';
import { Row, Col, Avatar, Button } from 'antd';
import { HeartOutlined, MessageOutlined, HeartFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import RequestMeeting from '../../components/modals/RequestMeeting'
import './SearchDisplay.scss';
import axios from 'axios';

const SearchDisplay = (props) => {
    const dispatch = useDispatch()
    const [ requestMeeting, setRequestMeeting ] = useState(false);
    const [ id, setId ] = useState('');
    const pets = useSelector(state => state.searchPet.PetId)
    console.log(pets.length, 'length pets')
    const SenderId = localStorage.getItem('userID')
    
    console.log(pets, 'ini search result buat pet')
    
    const openRequestMeeting = async (id) => {
        await setRequestMeeting (true)
        setId(id)
        console.log(id ,"id")
    }
    
    //handling like reload function search
    // useEffect(() => {
    //     dispatch(getAllPets(), 
    //     )
    // },[dispatch])

    //handling like
    const handleLike = async (pets_id ) => {
        const token = localStorage.getItem('token')
        const likeUrl = `https://product-tinpet-app.herokuapp.com/api/v1/likes/${pets_id}`
        try {
            const res = await axios ({
                method:'post',
                url: likeUrl,
                headers:{
                    Authorization: token
                }
            })
            console.log(res.data.status)
            if (res.data.status === 'success'){
                console.log('oke')
                // dispatch(getAllPets())
            } else{
                console.log('not oke')
                
            }
        } catch (error) {
            console.log(error, 'error like')
        }
    }



const petList = pets.map((item) =>{
    
    //handle like
    const ituLah = item?.Likes?.reduce((result, option)=> {
        if(option.isLike){
            return result.concat(option.SenderId)
        }
        return result;
    },[])

    return(
            <Row style={{height:'', width:'100%', margin:'40px 32px 40px 32px'}} key={item.id} >
                <Row style={{ width:'100%'}}>
                    <Col span={2} >
                        <a href='/#'>
                            <Avatar size={80} src={item.Pet.Profile.image_url}  alt='avatar-icon' />
                        </a>
                    </Col>
                    <Col xl={{offset:1, span:21}} lg={{offset:2, span:20}} sm={{offset:2, span:20}} xs={{offset:4, span:18}}  className='box box-post' >
                        <Row >
                            <Col xl={8} md={12} sm={{span:24}} xs={{span:24}} >
                                <img alt='cat-sample' src={item.Pet.image_url} style={{height:248, width:'100%', borderRadius:'15px'}}  />
                            </Col>
                            <Col className='pets-data' xl={{span:15, offset:1}} md={{span:11, offset:1}} sm={{span:24}} xs={{span:24}}  >
                                <Row>
                                    <Col span={12}>
                                        <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Name</p>
                                        <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px'}}>{item.Pet.name} </p>
                                    </Col>
                                    <Col span={12}>
                                        <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}}>Gender</p>
                                        <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px'}}> {item.Pet.gender} </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Age</p>
                                        <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px'}}> {item.Pet.age} </p>
                                    </Col>
                                    <Col span={12}>
                                        <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Category</p>
                                        <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px'}}> {item.category} </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Location</p>
                                        <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px', paddingRight:'20px'}}> {item.location} </p>
                                    </Col>
                                    <Col span={12}>
                                        <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Status</p>
                                        <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px'}}> {item.Pet.status} </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Description</p>
                                        <p style={{fontWeight:'600', fontSize:'16px',marginTop:'-5px', lineHeight:'22px', textAlign:'justify'}}>
                                            {item.Pet.description}
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{ marginTop:'10px'}}>
                            <Col  xl={8} md={12} sm={{span:24}} xs={{span:24}} style={{width:'297px', height:'80px', borderRadius:'15px'}}>
                                <Row>
                                    <p className='likes-comment' > {item.Pet.likeCounter} Likes</p>
                                    <p className='likes-comment' > {item.Pet.commentCounter} Comments</p>
                                </Row>
                                <Row>
                                    <span onClick={()=>{handleLike(item.PetId)}} style={{fontSize:'1.7rem', marginRight:'1.2rem', color:'', cursor:'pointer' }}>
                                        {(ituLah?.includes(Number(SenderId)) === true ? <HeartFilled style={{color:'red'}} />  : <HeartOutlined />  )}
                                    </span>
                                    <span>
                                        <MessageOutlined style={{fontSize:'1.7rem', marginTop:'.4rem'}} />
                                    </span>
                                </Row>
                            </Col>
                            <Col xl={{span:15, offset:1}} md={{span:11, offset:1}} sm={{span:24}} xs={{span:24}} >
                                <Button block className='btn-rqsmeet' onClick={() => openRequestMeeting(item.id)} >Request Meeting</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
    )})
    
    return (
        <Fragment>
            <Col className='box feed-component' lg={{ span: 17, offset: 1 }} md={24} sm={24} xs={24}>  
                <Row className='row-btn-post' >
                    <Col lg={24} xs={24}>
                        <h3>Found {pets.length} Result ...</h3>
                    </Col>
                </Row>
                <Row className='feed-post'>
                    {petList}
                    <RequestMeeting
                            id={id}
                            dispatch={dispatch}
                            requestMeeting={requestMeeting}
                            setRequestMeeting={setRequestMeeting}
                        />
                </Row>
            </Col>
        </Fragment>
    );
}

export default SearchDisplay;
