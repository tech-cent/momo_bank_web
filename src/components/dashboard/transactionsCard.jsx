import React, { useState} from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import TransactionsModal from './transactionsModal';
import TransactionsTable from './transactionsTable';

const TransactionsCard = props => {
  const { handleChange, handleSubmit, type, transactions, accounts } = props;
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
    const event2 = {
      target: {
        name: 'account',
        value: accounts[0].id
      }
    };
    handleChange(event);
    handleChange(event2);
    
  };
  const handleDeposit = () => {
    setShow(true);
    const event = {
      target: {
        name: 'type',
        value: 'deposit'
      }
    };
    const event2 = {
      target: {
        name: 'account',
        value: accounts[0].id
      }
    };
    handleChange(event);
    handleChange(event2);
  };
  return (
    <React.Fragment>
      <Card>
        <Card.Header as="h3">Transactions</Card.Header>
        <Card.Body>
          <Row>
            <Col>
              {transactions
                ? (
                  <React.Fragment>
                    {Object.keys(transactions).length > 0
                      && <TransactionsTable transactions={transactions} />
                    }
                  </React.Fragment>
                )
                : (
                  <p>No transactions available</p>
                )
              }
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="dark btn-block" type="submit" onClick={handleDeposit}>
                Deposit
              </Button>
            </Col>
            <Col>
              <Button variant="dark btn-block" type="submit" onClick={handleWithdraw}>
                Withdraw
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <TransactionsModal
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        type={type}
        show={show}
      />
    </React.Fragment>
  )
}

export default TransactionsCard;
