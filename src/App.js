import React, { useState, useEffect } from 'react';
import './App.css';
import ExpenseForm from './component/ExpenseForm';
import ExpenseList from './component/ExpenseList';
import ExpenseChart from './component/ExpenseChart';
import TotalExpense from './component/TotalExpense';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>💰 Smart Expense Tracker</h1>
        <p>Track your expenses smartly!</p>
      </header>

      <div className="container">
        <div className="left-section">
          <ExpenseForm addExpense={addExpense} />
          <TotalExpense expenses={expenses} />
        </div>

        <div className="right-section">
          <ExpenseChart expenses={expenses} />
        </div>
      </div>

      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;