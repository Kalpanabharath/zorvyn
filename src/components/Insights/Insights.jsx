import React from "react";
import { FaChartPie, FaArrowUp, FaLightbulb } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import "./Insights.css";

const Insights = () => {

  const transactions = [
    { date: "2026-01-05", category: "Food", amount: 200, type: "expense" },
    { date: "2026-01-15", category: "Salary", amount: 3000, type: "income" },
    { date: "2026-02-08", category: "Shopping", amount: 500, type: "expense" },
    { date: "2026-02-18", category: "Salary", amount: 3000, type: "income" },
    { date: "2026-03-10", category: "Bills", amount: 700, type: "expense" },
    { date: "2026-03-20", category: "Freelance", amount: 1200, type: "income" }
  ];

  /* Highest Spending Category */

  const expenses = transactions.filter(t => t.type === "expense");

  const categoryTotals = {};

  expenses.forEach(t => {
    categoryTotals[t.category] =
      (categoryTotals[t.category] || 0) + t.amount;
  });

  const highestCategory = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b
  );

  /* Monthly Data */

  const monthlyData = {};

  transactions.forEach(t => {

    const month = new Date(t.date).toLocaleString("default", { month: "short" });

    if (!monthlyData[month]) {
      monthlyData[month] = { month, income: 0, expense: 0 };
    }

    monthlyData[month][t.type] += t.amount;

  });

  const chartData = Object.values(monthlyData);

  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const savings = totalIncome - totalExpense;

  return (

    <div className="insights">

      {/* Insight Cards */}

      <div className="summary-cards">

        <div className="finance-card balance-card">

          <div className="card-top">
            <FaChartPie className="card-icon"/>
            <span>Highest Spending</span>
          </div>

          <h2>{highestCategory}</h2>

          <p className="card-desc">
            Category with highest expenses
          </p>

        </div>

        <div className="finance-card income-card">

          <div className="card-top">
            <FaArrowUp className="card-icon"/>
            <span>Total Savings</span>
          </div>

          <h2>${savings}</h2>

          <p className="card-desc">
            Income minus expenses
          </p>

        </div>

        <div className="finance-card expense-card">

          <div className="card-top">
            <FaLightbulb className="card-icon"/>
            <span>Observation</span>
          </div>

          <h2>Good</h2>

          <p className="card-desc">
            Expenses are lower than income
          </p>

        </div>

      </div>


      {/* Chart */}

      <div className="chart-box">

        <h3 className="graph-title">Monthly Income vs Expenses</h3>

        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month"/>

            <YAxis/>

            <Tooltip/>

            <Bar dataKey="income" fill="#22c55e"/>

            <Bar dataKey="expense" fill="#ef4444"/>

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default Insights;