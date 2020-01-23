import React from 'react';
import { Row, Card, Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


const AccountComponent = ({ account }) => {
  return (
    <Row style={{ borderBottom: '1px solid #D3D3D3', paddingBottom: '5px' }}>
      <Col>
        <Row>
          <Card.Title>A/C : 0000{account.id}</Card.Title>
        </Row>
        <Row>
          <Card.Text>Account type:&nbsp;&nbsp;</Card.Text>
          <Card.Text>{account.type}</Card.Text>
        </Row>
        <Row>
          <Card.Text>Account Bal:&nbsp;&nbsp;</Card.Text>
          <Card.Text> {account.balance} /= </Card.Text>
        </Row>
      </Col>
      <Col sm>
        <Button variant="dark">Load Account Details</Button>
      </Col>
    </Row>
  )
}

export default AccountComponent;

