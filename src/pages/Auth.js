import React, { useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setIsAuth } from '../store/UserStore';
import { LIBRARY_ROUTE } from '../utils/consts';
import { useFormik } from 'formik';
import { authSchema } from '../schemas';

const Auth = () => {
    const [isRegistrationForm, setIsRegistrtionForm] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (values, actions) => {
        dispatch(setIsAuth())
        actions.resetForm()
        navigate(LIBRARY_ROUTE)
    }
    const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: authSchema,
        onSubmit
    })

    const passwordCheck = errors.password ? <div style={{color: 'red'}}>{errors.password}</div> : "Пароль повинен містити мінімум 1 велику букву, 1 маленьку букву і 1 цифру"
    
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
            >
            <Card
                className='p-5 w-75'
                border='dark'
            >
                <h2 className='m-auto mb-3'>{isRegistrationForm ? 'Регістрація' : 'Авторизація'}</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label className='fw-semibold'>Електронна пошта</Form.Label>
                            <div>
                                <input 
                                    value={values.email}
                                    id='email' 
                                    type="email"
                                    placeholder="Введіть електронну пошту" 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={errors.email 
                                        ? 
                                        {width: '100%', padding: '6px 12px', borderRadius: '5px', border: ' 1px solid red'} 
                                        : 
                                        {width: '100%', padding: '6px 12px', borderRadius: '5px', border: ' 1px solid #dee2e6'}}
                                />
                            </div>
                        <Form.Text className="text-muted">
                            {errors.email ? <div style={{color: 'red'}}>{errors.email}</div> : "Ніколи не діліться своєю поштою та паролем"}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label className='fw-semibold'>Пароль</Form.Label>
                            <div>
                                <input 
                                    value={values.password}
                                    id='password' 
                                    type="password"
                                    placeholder="Введіть пароль" 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={errors.password 
                                        ? 
                                        {width: '100%', padding: '6px 12px', borderRadius: '5px', border: ' 1px solid red'} 
                                        : 
                                        {width: '100%', padding: '6px 12px', borderRadius: '5px', border: ' 1px solid #dee2e6'}}
                                />
                            </div>
                    </Form.Group>
                    <Form.Text className="text-muted">
                            { isRegistrationForm ? passwordCheck : ''}
                    </Form.Text>
                    <Row className='d-felx justify-content-between p-1 mt-3'>
                        <div className='w-50'>
                            {isRegistrationForm ? 'Є акаунт?' : 'Немає акаунту?'}
                            <NavLink 
                                className='ms-2' 
                                onClick={() => setIsRegistrtionForm(!isRegistrationForm)}
                                >
                                {isRegistrationForm ? 'Увійдть!' : 'Регістрація'}
                            </NavLink>
                        </div>
                        <Button 
                            style={{width: 'auto'}}
                            className='me-2 mt-4 px-4 py-2' 
                            variant="primary"
                            type='submit'
                        >
                            { isRegistrationForm ? 'Регістрація' : 'Ввійти'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;