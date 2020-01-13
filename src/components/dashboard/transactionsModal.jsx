import React, { useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const TransactionsModal = props => {
  const {handleChange, handleSubmit, type} = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleWithdraw = () => {
    setShow(true);
    const event = {
      target: {
        name: 'type',
        value: 'withdraw'
      }
    };
    handleChange(event);
  };
  const handleDeposit = () => {
    setShow(true);
    const event = {
      target: {
        name: 'type',
        value: 'deposit'
      }
    };
    handleChange(event);
  };

  return (
    <>
      <Button variant="dark btn-block" type="submit" onClick={handleDeposit}>
        Deposit
      </Button>
      <Button variant="dark btn-block" type="submit" onClick={handleWithdraw}>
        Withdraw
      </Button>

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
    </>
  )
}

export default TransactionsModal;
