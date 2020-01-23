import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


const AccountComponent = ({ account }) => {
  return (
    <Row style={{ borderBottom: '1px solid #D3D3D3', paddingBottom: '5px' }}>
      <Col>
        <Row style={{paddingBottom: '3px'}}>
          <Col><h5>A/C : 0000{account.id}</h5></Col>
        </Row>
        <Row style={{paddingBottom: '10px'}}>
          <Col>Account type:&nbsp;&nbsp;{account.type}</Col>
        </Row>
        <Row style={{paddingBottom: '20px'}}>
          <Col>Account Bal:&nbsp;&nbsp;{account.balance} /= </Col>
        </Row>
      </Col>
      <Col sm>
        <Button variant="dark">Load Account Details</Button>
      </Col>
    </Row>
  )
}

export default AccountComponent;

