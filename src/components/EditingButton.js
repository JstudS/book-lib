import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaPencil } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { setIsModalForInfo, setIsModalForText, setIsStoredInfo, setIsStoredText } from '../store/LibStore';

const EditingButton = ({title}) => {
    const dispatch = useDispatch()
    const setText = () => {
        dispatch(setIsModalForText())
    } 
    
    const setInfo = () => {
        dispatch(setIsModalForInfo())
    }   
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
                onClick={() => title === 'text' ? setText() : setInfo()} 
            >
                <FaPencil />
            </div>
        </OverlayTrigger>
    );
};

export default EditingButton;