import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaPencil } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalForInfo, setIsModalForText, setIsNotAuthModal } from '../store/LibStore';
import { userIsAuth } from '../store/UserStore';

const EditingButton = ({title}) => {

    const dispatch = useDispatch()
    const isAuth = useSelector(userIsAuth)
    
    const setText = () => {
        dispatch(setIsModalForText())
    } 
    
    const setInfo = () => {
        dispatch(setIsModalForInfo())
    }
    
    const setModalAuth = () => {
        dispatch(setIsNotAuthModal())
    }

    const modalToChangeCheck = title === 'text' ? setText : setInfo
    return (
        <OverlayTrigger
            placement='top'
            overlay={<Tooltip id="button-tooltip">Редагування</Tooltip>}
        >
            <div 
                style={{
                    width: '20px',
                    position: 'absolute',
                    top: '10px',
                    right: '15px',
                    cursor: 'pointer'
                }}
                onClick={ isAuth ? modalToChangeCheck : setModalAuth}  
            >
                <FaPencil />
            </div>
        </OverlayTrigger>
    );
};

export default EditingButton;