import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !amount) {
      alert('Please fill all fields');
      return;
    }

    addExpense({
      title,
      amount: parseFloat(amount),
      category,
      date: new Date().toLocaleDateString()
    });

    setTitle('');
    setAmount('');
    setCategory('Food');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>➕ Add New Expense</h2>
      
      <div className="form-group">
        <label>Expense Title</label>
        <input
          type="text"
          placeholder="e.g., Groceries, Movie, Rent"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Amount (₹)</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Entertainment</option>
          <option>Bills</option>
          <option>Other</option>
        </select>
      </div>

      <button type="submit" className="btn-add">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;