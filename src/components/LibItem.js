import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { images } from '../assets/images';
import { useNavigate } from "react-router-dom";
import { LIBPAGE_ROUTE } from '../utils/consts';

const LibItem = ({element, typeName}) => {
    const navigate = useNavigate()
    return (
        <Col 
            md={3}
            onClick={() => navigate(LIBPAGE_ROUTE + '/'+ typeName +'/' + element.id) }
        >
            <Card 
                border='light'
                style={{height: 250, maxWidth: 170, cursor: 'pointer'}}
            >
                <Image 
                    src={images[element.img]} 
                    alt=''
                    className='rounded'
                    style={{height: '100%', maxWidth: '100%'}}
                />
                <div 
                    style={{position: 'absolute', top: '8px', left: '-6px', color: 'white', fontSize: '11px', backgroundColor: '#3bb33b', width: '28px', height: '18px', textAlign: 'center', borderRadius: '4px'}}
                >{element.rating}</div>
            </Card>
            <div 
                className='mt-2'
                style={{display: 'flex', maxWidth: 170, justifyContent: 'space-between'}}
            >
                <div style={{wordBreak: 'break-word', fontSize: '15px'}}>{element.name}</div>
            </div>
            <div style={{color: '#8a8a8e', fontSize: '14px'}}>{element.genre}</div>
        </Col>
    );
};

export default LibItem;
