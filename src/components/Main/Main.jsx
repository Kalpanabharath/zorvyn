import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Transactions from "../Transactions/Transaction";
import Insights from "../Insights/Insights";
import "./Main.css";
import { useAppContext } from "../../contect/AppContext";

const Main = () => {
  const { activePage } = useAppContext();

  return (
    <div className="main-container">
      {activePage === "dashboard" && <Dashboard />}
      {activePage === "transactions" && <Transactions />}
      {activePage === "insights" && <Insights />}
    </div>
  );
};

export default Main;