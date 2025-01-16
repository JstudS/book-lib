import React from 'react';
import { Card, Col, Container, Row} from 'react-bootstrap';
import {fullImages} from '../assets/images'
import EditingButton from './EditingButton';
import { useDispatch, useSelector } from 'react-redux';
import { isModalForInfo, isModalForText, setIsModalForInfo, setIsModalForText } from '../store/LibStore';
import ModalForText from './ModalForText';
import ModalForInfo from './ModalForInfo';
import ModalNotAuth from './ModalNotAuth';

const TitileInfo = ({titlePageInfo, titleTypeName, titleName}) => {
    const isModalForInfoStored = useSelector(isModalForInfo)
    const isModalForTextStored = useSelector(isModalForText)
    const dispatch = useDispatch()
    return (
        <Container className='d-flex flex-column'>
            <div
                style={{
                    width: '1070px', 
                    height: '400px', 
                    border: '1px solid #e5e5e5', 
                    borderRadius: '20px',
                    backgroundImage: `url(${fullImages[titlePageInfo.image]})`, 
                    backgroundSize: 'cover'
                }}
                className='mt-3 mx-auto' 
            >
            </div>
            <Row
                style={{margin: '0 100px'}}
            >
                <Col md={3}>
                    <Card className='mt-3 py-2'>
                        <EditingButton title='info'/>
                        {   
                            titlePageInfo.mainInfo.map(el => {
                                return ( 
                                    <div className='py-2 px-3' key={el.id}>
                                        <div style={{fontSize: '15px', color: '#8a8a8e'}}>{el.title}</div>
                                        <div>{el.description}</div>
                                    </div>
                                )
                            })
                        }
                        <ModalForInfo 
                            show={isModalForInfoStored} 
                            onHide={() => dispatch(setIsModalForInfo())}
                            typename={titleTypeName}
                            name={titleName}
                        />
                    </Card>
                </Col>
                <Col md={9}>
                    <Card
                        className='mt-3 p-3'
                    >
                        <div className='fw-bold text-center'>{titlePageInfo.titleName}</div>
                    <hr />
                        <EditingButton title='text'/>
                            {titlePageInfo.text}
                        <ModalForText 
                            show={isModalForTextStored}
                            onHide={() => dispatch(setIsModalForText())}
                            typename={titleTypeName}
                            name={titleName}
                        />
                    </Card>
                </Col>
            </Row>
            <ModalNotAuth />
        </Container>
    );
};

export default TitileInfo;