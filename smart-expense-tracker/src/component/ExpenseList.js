import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses, deleteExpense }) {
  const getCategoryIcon = (category) => {
    const icons = {
      Food: '🍔',
      Transport: '🚗',
      Shopping: '🛍️',
      Entertainment: '🎬',
      Bills: '💡',
      Other: '📌'
    };
    return icons[category] || '💰';
  };

  if (expenses.length === 0) {
    return (
      <div className="expense-list empty">
        <div className="empty-state">
          <p>📭 No expenses yet</p>
          <p>Add your first expense above!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="expense-list">
      <h2>📋 Expense History</h2>
      <div className="expense-items">
        {expenses.map((expense) => (
          <div key={expense.id} className="expense-item">
            <div className="expense-info">
              <div className="expense-icon">
                {getCategoryIcon(expense.category)}
              </div>
              <div className="expense-details">
                <h3>{expense.title}</h3>
                <div className="expense-meta">
                  <span className="category">{expense.category}</span>
                  <span className="date">{expense.date}</span>
                </div>
              </div>
            </div>
            <div className="expense-amount">
              ₹{expense.amount.toFixed(2)}
              <button 
                className="btn-delete"
                onClick={() => deleteExpense(expense.id)}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;