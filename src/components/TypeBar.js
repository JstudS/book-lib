import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Types from '../assets/Types.json'
import { useDispatch, useSelector } from 'react-redux';
import { selectedType, setSelectedType } from '../store/UserStore';

const TypeBar = () => {
    const dispatch = useDispatch()
    const userSelectedType = useSelector(selectedType)
    return (
        <ListGroup className='mt-3'>
            { Types.map( type => 
                <ListGroup.Item 
                    active={type.id === userSelectedType.id}
                    style={{cursor: 'pointer'}}
                    key={type.id}
                    onClick={() => dispatch(setSelectedType(type))}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
};

export default TypeBar;