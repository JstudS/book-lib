import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setIsStoredInfo, setTitleInfo } from '../store/LibStore';

const ModalForInfo = (props) => {
    const placeholderInfo = ['Введіть новий тип', 'Введіть новий рік', 'Введіть кількість глав', 'Введіть новий статус', 'Введіть нову франшизу', 'Введіть нового автора', 'Введіть нового видавця']
    let changedInfo = [
        {id: 1, title: "Тип", description: ""},
        {id: 2, title: "Рік", description: ""},
        {id: 3, title: "Глави", description: ""},
        {id: 4, title: "Статус", description: ""},
        {id: 5, title: "Франшиза", description: ""},
        {id: 6, title: "Автори", description: ""},
        {id: 7, title: "Видавці", description: ""}
    ]

    const dispatch = useDispatch()
    const saveInfo = () => {
        props.onHide()
        dispatch(setTitleInfo(changedInfo))
        dispatch(setIsStoredInfo())
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
                Редагування інформації
            </Modal.Title>
            </Modal.Header>
            <Modal.Body 
                className='d-flex flex-column justify-content-between'
                style={{height: '450px'}}
            >
                {changedInfo.map((el) => {
                    return (
                        <div>
                            <div>{el.title}</div>
                            <input 
                                type='text'
                                placeholder={placeholderInfo[el.id - 1]}
                                onChange={(e) => el.description = e.target.value}
                            />
                        </div>
                    )
                })}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={saveInfo}>Зберегти</Button>
                <Button onClick={props.onHide}>Закрити</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalForInfo;