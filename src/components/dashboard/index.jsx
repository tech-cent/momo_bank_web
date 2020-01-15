import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TransactionsCard from './transactionsCard';
import AccountsCard from './accountsCard';

const Dashboard = props => {
  const {handleChange, handleSubmit, type, accounts, isLoading, transactions } = props;

  return (
    <Container>
      <Row className="dasboard-container">
        <Col md={3} className="dasboard-container__card1">
          <AccountsCard 
            accounts={accounts}
            isLoading={isLoading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            type={type}
          />
        </Col>
        <Col md={{ span: 8, offset: 1 }} className="dasboard-container__card2">
          <TransactionsCard
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            transactions={transactions}
            accounts={accounts}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard;
