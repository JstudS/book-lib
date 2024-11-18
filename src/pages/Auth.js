import React, { useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setIsAuth } from '../store/UserStore';
import { SHOP_ROUTE } from '../utils/consts';

const Auth = () => {
    const [isRegistrationForm, setIsRegistrtionForm] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logIn = () => {
        dispatch(setIsAuth())
        navigate(SHOP_ROUTE)
    }
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
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-semibold'>Електронна пошта</Form.Label>
                        <Form.Control type="email" placeholder="Введіть електронну пошту" />
                        <Form.Text className="text-muted">
                            Ніколи не діліться своєю поштою та паролем
                        </Form.Text>
                    </Form.Group>
            
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-semibold'>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введіть пароль" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    <Row className='d-felx justify-content-between p-1'>
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
                            onClick={() => logIn()}
                        >
                            Ввійти
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;