import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';

export default function Register() {
  const [show, setShow] = useState(true);
  const navigate= useNavigate();

  const handleClose = () =>
  { 
    setShow(false)
    navigate('/')
  }

  const regCustomer= ()=>{
    navigate('/regcustomer')
  }

  const regHelper=()=>{
    navigate('/reghelper')
  }

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Select Your Registration Type </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={regCustomer}>
            Register as Guest
          </Button>
          <Button variant="secondary" onClick={regHelper}>
            Register as Helper
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel 
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}


