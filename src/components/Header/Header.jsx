import React, { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { CiSun } from "react-icons/ci";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaTachometerAlt, FaExchangeAlt, FaChartLine } from "react-icons/fa";
import "./Header.css";
import { useAppContext } from "../../contect/AppContext";

const Header = () => {
  const { activePage, setActivePage, isAdmin, setIsAdmin } = useAppContext();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <Navbar
      expanded={expanded}
      onToggle={setExpanded}
      expand="lg"
      className="bg-body-tertiary navbar-custom"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">

          {/* Dark Mode */}
          <Nav.Link onClick={toggleDarkMode} className="d-none d-md-block">
            {isDarkMode ? (
              <CiSun size={24} color="var(--icon-color)" />
            ) : (
              <IoMoonOutline size={24} color="var(--icon-color)" />
            )}
          </Nav.Link>

          {/* Mobile Navigation */}
          <Nav.Link
            className="d-block d-md-none p-2"
            onClick={() => {
              setActivePage("dashboard");
              setExpanded(false);
            }}
          >
            <FaTachometerAlt /> Dashboard
          </Nav.Link>

          <Nav.Link
            className="d-block d-md-none p-2"
            onClick={() => {
              setActivePage("transactions");
              setExpanded(false);
            }}
          >
            <FaExchangeAlt /> Transactions
          </Nav.Link>

          <Nav.Link
            className="d-block d-md-none p-2"
            onClick={() => {
              setActivePage("insights");
              setExpanded(false);
            }}
          >
            <FaChartLine /> Insights
          </Nav.Link>

          {/* Role Switch */}
          <NavDropdown
            title={isAdmin ? "Admin" : "Viewer"}
            align="end"
            className="d-none d-md-block text-secondary "
          >
            <NavDropdown.Item onClick={() => setIsAdmin(false)}>
              Viewer
            </NavDropdown.Item>

            <NavDropdown.Item onClick={() => setIsAdmin(true)}>
              Admin
            </NavDropdown.Item>
          </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;