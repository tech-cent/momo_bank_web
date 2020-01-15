import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const TransactionsModal = props => {
  const {handleChange, handleSubmit, handleClose, type, show} = props;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{type} money</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="amount">
            <Form.Control type="text" placeholder="amount" name="amount" onChange={handleChange}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TransactionsModal;
