import React from 'react';
import { Container, Row, Card, Spinner } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import AccountComponent from '../common/AccountComponent';
import './dashboard.scss';

const AccountsCard = ({ accounts, isLoading }) => {
  return (
    <>
      <div>
        <Row>
          <Col>
            <Card>
              <Card.Header as="h3">Account: {accounts && `(${accounts.length})`}</Card.Header>
              <Card.Body>
                <Container>
                  {
                    !isLoading && !accounts && <Card.Text>You don't have an account yet</Card.Text>
                  }
                  {
                    isLoading && <div className="authentication-container__spinner">
                      <Spinner animation="grow" />
                    </div> 
                  }
                  {
                    accounts && accounts.map((account, index) => {
                      return <AccountComponent account={account} key={index} />
                    })
                  }
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AccountsCard;
