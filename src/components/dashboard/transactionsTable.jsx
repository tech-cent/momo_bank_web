import React from 'react';
import moment from 'moment';
import { Table } from 'react-bootstrap';

const TransactionsTable = props => {
  const {transactions} = props;
  return (
    <div className="dasboard-container__card2__table">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <React.Fragment key={transaction.id}>
              <tr>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{moment(transaction.date_modified).format('DD-MM-YYYY')}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default TransactionsTable;
