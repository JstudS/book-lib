import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setFullLibArray, setIsStoreUsed } from '../store/LibStore';
import { useFormik } from 'formik';
import { titleTextSchema } from '../schemas';

const ModalForText = (props) => {
    const onSubmit = (values, actions) => {
        props.onHide()
        dispatch(setFullLibArray({
            typename: props.typename,
            name: props.name,
            text: values.text
        }))
        dispatch(setIsStoreUsed())
        actions.resetForm()
    }

    const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            text: ""
        },
        validationSchema: titleTextSchema,
        onSubmit
    })
    
    const dispatch = useDispatch()

    return (
        <Modal
            {...props}
            size="lg"
            style={{backgroundColor: 'rgb(0 0 0 / 0.9)'}}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Редагування опису
                </Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <textarea
                        value={values.text}
                        id='text' 
                        type='text'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Введіть новий опис'
                        style={ errors.text  ? {width: '100%', height: '300px', border: '2px solid red'} : {width: '100%', height: '300px'}}

                    />
                    { errors.text && <div style={{color: 'red'}}>{errors.text}</div>}
                </Modal.Body>
                <Modal.Footer>
                    <Button type='submit'>Зберегти</Button>
                    <Button onClick={props.onHide}>Закрити</Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default ModalForText;