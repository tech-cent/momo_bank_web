import React from 'react';
import { Container, Row, Card, Spinner } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import AccountComponent from '../common/AccountComponent';
import './dashboard.scss';

const DashboardComponent = ({ accounts, isLoading }) => {
  return (
    <>
      <div className="dasboard-container">
        <Container>
          <Row>
            <Col>
              <Card style={{ width: '35rem',
              borderLeft: '4px solid #FFCC00', 
              boxShadow: '5px 10px 10px rgba(0, 0, 0, .2)', textAlign: 'center' }}>
                <Card.Header as="h3">My Accounts: {accounts && `(${accounts.length})`}</Card.Header>
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
        </Container>
      </div>
    </>
  );
};

export default DashboardComponent;
