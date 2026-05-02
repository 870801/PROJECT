import React from 'react';
import './TotalExpense.css';

function TotalExpense({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="total-expense">
      <div className="total-card">
        <div className="total-label">💰 Total Expenses</div>
        <div className="total-amount">₹{total.toFixed(2)}</div>
        <div className="total-count">
          {expenses.length} expense{expenses.length !== 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
}

export default TotalExpense;