import React, { useState } from "react";
import "./Transaction.css";
import { FaTrash } from "react-icons/fa";
import { useAppContext } from "../../contect/AppContext";

const Transactions = () => {
  const { isAdmin } = useAppContext();

  const [transactions, setTransactions] = useState([
    { id: 1, date: "2026-04-01", category: "Food", amount: 120, type: "expense" },
    { id: 2, date: "2026-04-02", category: "Salary", amount: 2500, type: "income" },
    { id: 3, date: "2026-04-03", category: "Shopping", amount: 300, type: "expense" },
    { id: 4, date: "2026-04-05", category: "Freelance", amount: 900, type: "income" }
  ]);

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  const [newTransaction, setNewTransaction] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense"
  });

  // Add Transaction

  const addTransaction = () => {

    if (!newTransaction.date || !newTransaction.category || !newTransaction.amount) {
      return;
    }

    const newData = {
      id: transactions.length + 1,
      ...newTransaction
    };

    setTransactions([...transactions, newData]);

    setNewTransaction({
      date: "",
      category: "",
      amount: "",
      type: "expense"
    });
  };

  // Delete Transaction (Admin)

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  // Filter + Search

  const filteredTransactions = transactions.filter((t) => {

    const matchesSearch =
      t.category.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      filterType === "all" || t.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="transactions">

      <h2>Transactions</h2>

      {/* Filters */}

      <div className="transaction-controls">

        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

      </div>

      {/* Admin Add Transaction */}

      {isAdmin && (
        <div className="add-transaction">

          <input
            type="date"
            value={newTransaction.date}
            onChange={(e) =>
              setNewTransaction({ ...newTransaction, date: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Category"
            value={newTransaction.category}
            onChange={(e) =>
              setNewTransaction({ ...newTransaction, category: e.target.value })
            }
          />

          <input
            type="number"
            placeholder="Amount"
            value={newTransaction.amount}
            onChange={(e) =>
              setNewTransaction({ ...newTransaction, amount: e.target.value })
            }
          />

          <select
            value={newTransaction.type}
            onChange={(e) =>
              setNewTransaction({ ...newTransaction, type: e.target.value })
            }
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <button onClick={addTransaction}>Add</button>

        </div>
      )}

      {/* Transaction Table */}

      <table className="transaction-table">

        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
            {isAdmin && <th>Action</th>}
          </tr>
        </thead>

        <tbody>

          {filteredTransactions.length === 0 ? (

            <tr>
              <td colSpan="5" className="no-data">
                No transactions found
              </td>
            </tr>

          ) : (

            filteredTransactions.map((t) => (

              <tr key={t.id}>

                <td>{t.date}</td>
                <td>{t.category}</td>

                <td className={t.type === "income" ? "income" : "expense"}>
                  ${t.amount}
                </td>

                <td>
                  <span className={t.type === "income" ? "income-tag" : "expense-tag"}>
                    {t.type}
                  </span>
                </td>

                {isAdmin && (
                  <td>
                    <button
                      className="delete-btn px-2 py-1 border-0 rounded text-secondary"
                      onClick={() => deleteTransaction(t.id)}
                    >
                     <FaTrash />
                    </button>
                  </td>
                )}

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
};

export default Transactions;