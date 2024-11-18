import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setIsStoredText, setTitleText } from '../store/LibStore';

const ModalForText = (props) => {
    let changedText = ''
    const dispatch = useDispatch()
    const saveText = () => {
        props.onHide()
        dispatch(setTitleText(changedText))
        dispatch(setIsStoredText())
    }
    return (
        <Modal
            {...props}
            size="lg"
            style={{backgroundColor: 'rgb(0 0 0 / 0.9)',}}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Редагування опису
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea
                    type='text'
                    onChange={(e) => changedText = e.target.value}
                    placeholder='Введіть новий опис'
                    style={{width: '100%', height: '300px'}}
                />
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={saveText}>Зберегти</Button>
            <Button onClick={props.onHide}>Закрити</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalForText;