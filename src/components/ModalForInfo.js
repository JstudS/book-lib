import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setIsStoreUsed, setTitleInfo } from '../store/LibStore';
import { useFormik } from 'formik';
import { titleInfoSchema } from '../schemas';

const ModalForInfo = (props) => {
    const placeholderInfo = ['Введіть новий тип', 'Введіть новий рік', 'Введіть кількість глав', 'Введіть новий статус', 'Введіть нову франшизу', 'Введіть нового автора', 'Введіть нового видавця']
    const dispatch = useDispatch()
    const onSubmit = (values, actions) =>{
        props.onHide()
        dispatch(setTitleInfo({
            typename: props.typename,
            name: props.name,
            info: values.info
        }))
        dispatch(setIsStoreUsed())
        actions.resetForm()
    }
    const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            info: [
                {id: 1, title: "Тип", description: ""},
                {id: 2, title: "Рік", description: ""},
                {id: 3, title: "Глави", description: ""},
                {id: 4, title: "Статус", description: ""},
                {id: 5, title: "Франшиза", description: ""},
                {id: 6, title: "Автори", description: ""},
                {id: 7, title: "Видавці", description: ""}
            ]
        },
        validationSchema: titleInfoSchema,
        onSubmit
    })

    const errorsInfoCheck = (mode, index) => {
        if(mode === 'border'){
           return errors.info[index] ? {border: '1px solid red', fontSize: '15px'} : {} 
        }
        if(mode === 'undertitle'){
            return errors.info[index] ? <div style={{color: 'red', fontSize: '14px'}}>{errors.info[index].description}</div> : ''
        }
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
            <form onSubmit={handleSubmit}>
                <Modal.Body 
                    className='d-flex flex-column justify-content-evenly'
                    style={{height: 'auto'}}
                >
                    {values.info.map((el, index) => {
                        return (
                            <div key={index}>
                                <div>{el.title}</div>
                                <input 
                                    value={el.description}
                                    id={`info[${index}].description`}
                                    type='text'
                                    placeholder={placeholderInfo[el.id - 1]}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={errors.info ? errorsInfoCheck('border', index) : {}}
                                />
                                {errors.info ? errorsInfoCheck('undertitle', index) : ''}
                            </div>
                        )
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button type='submit' >Зберегти</Button>
                    <Button onClick={props.onHide}>Закрити</Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default ModalForInfo;