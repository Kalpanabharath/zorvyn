import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("dashboard");
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AppContext.Provider
      value={{ activePage, setActivePage, isAdmin, setIsAdmin }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
