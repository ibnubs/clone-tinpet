import React, { Fragment  } from 'react';
import { Row, Col, Button } from 'antd';
import { HeartFilled, MessageOutlined } from '@ant-design/icons';



const PostCard = () => {

    return (
        <Fragment>
            <Row style={{height:'', width:'100%', margin:'40px 0px 40px 0px'}} >
                <Row style={{ width:'100%'}}>
                    <Col xl={{offset:1, span:22}} lg={{offset:2, span:20}} sm={{offset:2, span:20}} xs={{offset:4, span:18}}  className='box box-post' >
                        <Row >
                            <Col xl={8} md={12} sm={{span:24}} xs={{span:24}} >
                                <img alt='cat-sample' src={require('../../../assets/images/ramiz-dedakovic-9SWHIgu8A8k-unsplash.jpg')} style={{height:248, width:'100%', borderRadius:'15px'}}  />
                            </Col>
                            <Col className='pets-data' xl={{span:15, offset:1}} md={{span:11, offset:1}} sm={{span:24}} xs={{span:24}}  >
                                <Row>
                                    <Col span={12}>
                                        <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Name</p>
                                        <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px'}}>Justin</p>
                                    </Col>
                                    <Col span={12}>
                                        <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Gender</p>
                                        <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px'}}>Male</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Age</p>
                                        <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px'}}>1 years old</p>
                                    </Col>
                                    <Col span={12}>
                                        <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Category</p>
                                        <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px'}}>Cat</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Location</p>
                                        <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px', paddingRight:'20px'}}>4140 Parker Rd. Allentown, New Mexico 31134</p>
                                    </Col>
                                    <Col span={12}>
                                        <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Status</p>
                                        <p style={{fontWeight:'bold', fontSize:'18px',marginTop:'-5px', lineHeight:'22px'}}>Available</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <p style={{fontSize:'14px', color:'#7B7B7B', lineHeight:'17px'}} >Description</p>
                                        <p style={{fontWeight:'600', fontSize:'16px',marginTop:'-5px', lineHeight:'22px', textAlign:'justify'}}>
                                            The longhaired Angora cat is not the source for angora sweaters, although his fur is certainly just as soft and beautiful. This natural breed takes his name from the city of Ankara in Turkey, which was formerly known as Angora.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{ marginTop:'10px'}}>
                            <Col  xl={8} md={12} sm={{span:24}} xs={{span:24}} style={{width:'297px', height:'80px', borderRadius:'15px'}}>
                                <Row>
                                    <p className='likes-comment' >1540 Likes</p>
                                    <p className='likes-comment' >21 Comments</p>
                                </Row>
                                <Row>
                                    {/* <a href="/#"> */}
                                    <Button type='text'>
                                        <HeartFilled href="www.google.co.id" twoToneColor="#eb2f96" style={{fontSize:'1.7rem', marginRight:'1.2rem', color:'', cursor:'pointer' }} />
                                    </Button>
                                    {/* </a> */}
                                    <MessageOutlined style={{fontSize:'1.7rem'}} />
                                </Row>
                                
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Row>
        </Fragment>
    );
}

export default PostCard;
