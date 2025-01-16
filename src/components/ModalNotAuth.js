import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { isNotAuthModal, setIsNotAuthModal } from '../store/LibStore';

const ModalNotAuth = (props) => {
    const dispatch = useDispatch()
    const showModal = useSelector(isNotAuthModal)
    return (
      <Offcanvas 
        show={showModal} 
        onHide={() => dispatch(setIsNotAuthModal())} 
        placement='bottom'
        style={{maxWidth: '350px', margin: 'auto', maxHeight: '150px', borderRadius: '10px', marginBottom: '10px'}}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{color: 'red'}}>Увага</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body
          style={{paddingTop: '0px'}}
        >
          Ви не авторизовані!
          <div>Увійдіть, щоб мати можливість редагувати!</div>
        </Offcanvas.Body>
      </Offcanvas>
      );
    }

export default ModalNotAuth;