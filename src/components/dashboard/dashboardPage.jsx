import React from 'react';
import TransactionsModal from './transactionsModal';

const DashboardPage = props => {
  const {handleChange, handleSubmit, type} = props;
  return (
    <div className="authentication-container">
      <TransactionsModal
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        type={type}
      />
    </div>
  )
}

export default DashboardPage;
