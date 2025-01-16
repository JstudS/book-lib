import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { LIBRARY_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth, userIsAuth } from '../store/UserStore';

const NavBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAdmin = useSelector(userIsAuth)
    const logOut = () => {
        dispatch(setIsAuth())
        navigate(LOGIN_ROUTE)
    }
    return (
        isAdmin
        ?
        <Navbar className='px-5' bg="dark" data-bs-theme="dark">
        <div className='fs-4' style={{color: 'white', cursor: 'pointer'}} onClick={() => navigate(LIBRARY_ROUTE)}>СвітКниг</div>
        <Nav className='ms-auto'>
            <Button variant='secondary' onClick={() => logOut()}>Вийти</Button>
        </Nav>
        </Navbar>
        :
        <Navbar className='px-5' bg="dark" data-bs-theme="dark">
            <div className='fs-4' style={{color: 'white', cursor: 'pointer'}} onClick={() => navigate(LIBRARY_ROUTE)}>СвітКниг</div>
            <Nav className='ms-auto'>
                <Button className='me-2 px-3' variant='secondary' onClick={() => navigate(LOGIN_ROUTE)}>Вхід</Button>
            </Nav>
        </Navbar>
    );
};

export default NavBar;