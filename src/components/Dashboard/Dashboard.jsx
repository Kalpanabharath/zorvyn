import React from "react";
import { FaWallet, FaArrowDown, FaArrowUp } from "react-icons/fa";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {

  const summary = {
    balance: 12500,
    income: 8200,
    expense: 4300
  };

  const balanceData = [
    { month: "Jan", balance: 4000 },
    { month: "Feb", balance: 5000 },
    { month: "Mar", balance: 6500 },
    { month: "Apr", balance: 8000 },
    { month: "May", balance: 9500 },
    { month: "Jun", balance: 12500 }
  ];

  const categoryData = [
    { name: "Food", value: 1200 },
    { name: "Shopping", value: 800 },
    { name: "Bills", value: 1500 },
    { name: "Travel", value: 500 }
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="dashboard">

    <div className="summary-cards">

  <div className="finance-card balance-card">
    <div className="card-top">
      <FaWallet className="card-icon"/>
      <span>Total Balance</span>
    </div>
    <h2>$12,500</h2>
    <p className="card-desc">Current available balance</p>
  </div>

  <div className="finance-card income-card">
    <div className="card-top">
      <FaArrowDown className="card-icon"/>
      <span>Total Income</span>
    </div>
    <h2>$8,200</h2>
    <p className="card-desc">Income this month</p>
  </div>

  <div className="finance-card expense-card">
    <div className="card-top">
      <FaArrowUp className="card-icon"/>
      <span>Total Expenses</span>
    </div>
    <h2>$4,300</h2>
    <p className="card-desc">Expenses this month</p>
  </div>

</div>

      {/* Charts Section */}
      <div className="charts row gap-3" >

        {/* Balance Trend */}
        <div className="chart-box col-md-6 col-12">
          <h3 className="graph-title">Balance Trend</h3>

          <LineChart width={450} height={250} data={balanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="balance" stroke="#4f46e5" strokeWidth={3}/>
          </LineChart>

        </div>

        {/* Category Breakdown */}
        <div className="chart-box col-md-5 col-12">
          <h3 className="graph-title">Spending Breakdown</h3>

          <PieChart width={300} height={250}>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              outerRadius={90}
              dataKey="value"
              label
            >
              {categoryData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;