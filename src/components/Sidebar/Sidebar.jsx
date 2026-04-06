import React from "react";
import sidebarLogo from "../../assets/sidebar-logo.webp";
import { FaTachometerAlt, FaExchangeAlt, FaChartLine } from "react-icons/fa";
import "./Sidebar.css";
import { useAppContext } from "../../contect/AppContext";

const Sidebar = () => {
  const { activePage, setActivePage } = useAppContext();
  return (
    <div className="sidebar d-none d-md-block">
      <img src={sidebarLogo} alt="Sidebar Logo" className="navbar-logo" />

      <ul className="sidebar-list">
        <li
          onClick={() => setActivePage("dashboard")}
          className={activePage === "dashboard" ? "activepage" : ""}
        >
          <FaTachometerAlt /> Dashboard
        </li>

        <li
          onClick={() => setActivePage("transactions")}
          className={activePage === "transactions" ? "activepage" : ""}
        >
          <FaExchangeAlt /> Transactions
        </li>

        <li
          onClick={() => setActivePage("insights")}
          className={activePage === "insights" ? "activepage" : ""}
        >
          <FaChartLine /> Insights
        </li>
        </ul>
    </div>
  );
};

export default Sidebar;