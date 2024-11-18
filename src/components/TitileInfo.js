import React from 'react';
import { Card, Col, Container, Row} from 'react-bootstrap';
import {fullImages} from '../assets/images'
import EditingButton from './EditingButton';
import { useDispatch, useSelector } from 'react-redux';
import { isModalForInfo, isModalForText, isStoredInfo, isStoredText, setIsModalForInfo, setIsModalForText, titleInfo, titleText } from '../store/LibStore';
import ModalText from './ModalForText';
import ModalForInfo from './ModalForInfo';

const TitileInfo = ({title}) => {
    const isModalForTextStored = useSelector(isModalForText)
    const isModalForInfoStored = useSelector(isModalForInfo)

    const titleTextStored = useSelector(titleText)
    const titleInfoStored = useSelector(titleInfo)

    const isTitleTextStored = useSelector(isStoredText)
    const isTitleInfoStored = useSelector(isStoredInfo)
    const dispatch = useDispatch()
    return (
        <Container className='d-flex flex-column'>
            <div
                style={{
                    width: '1070px', 
                    height: '400px', 
                    border: '1px solid #e5e5e5', 
                    borderRadius: '20px',
                    backgroundImage: `url(${fullImages[title.image]})`, 
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
                            isTitleInfoStored 
                            ?
                            titleInfoStored.map((el) => {
                                return (
                                    <div className='py-2 px-3' key={el.id}>
                                        <div style={{fontSize: '15px', color: '#8a8a8e'}}>{el.title}</div>
                                        <div>{el.description}</div>
                                    </div>
                                )
                            })
                            :
                            title.mainInfo.map(el => {
                                return ( 
                                    <div className='py-2 px-3' key={el.id}>
                                        <div style={{fontSize: '15px', color: '#8a8a8e'}}>{el.title}</div>
                                        <div>{el.description}</div>
                                    </div>
                                )
                            })
                        }
                        <ModalForInfo show={isModalForInfoStored} onHide={() => dispatch(setIsModalForInfo())}/>
                    </Card>
                </Col>
                <Col md={9}>
                    <Card
                        className='mt-3 p-3'
                    >
                        <div className='fw-bold text-center'>{title.titleName}</div>
                    <hr />
                        <EditingButton title='text'/>
                        {isTitleTextStored ? titleTextStored : title.text}
                        <ModalText show={isModalForTextStored} onHide={() => dispatch(setIsModalForText())}/>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default TitileInfo;