import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './ExpenseChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ expenses }) {
  const getCategoryData = () => {
    const categoryTotals = {};
    
    expenses.forEach(expense => {
      if (categoryTotals[expense.category]) {
        categoryTotals[expense.category] += expense.amount;
      } else {
        categoryTotals[expense.category] = expense.amount;
      }
    });

    return {
      labels: Object.keys(categoryTotals),
      datasets: [
        {
          data: Object.values(categoryTotals),
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
          ],
          borderWidth: 2,
          borderColor: 'white',
        },
      ],
    };
  };

  const chartData = getCategoryData();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ₹${value} (${percentage}%)`;
          }
        }
      }
    }
  };

  return (
    <div className="expense-chart">
      <h2>📊 Expense Distribution</h2>
      {expenses.length === 0 ? (
        <div className="chart-placeholder">
          <p>No data to display</p>
          <p>Add expenses to see the chart</p>
        </div>
      ) : (
        <div className="chart-container">
          <Pie data={chartData} options={options} />
        </div>
      )}
    </div>
  );
}

export default ExpenseChart;