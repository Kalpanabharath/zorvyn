import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { AppProvider } from "./contect/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div>
        <Header />
        <Sidebar />
        <Main />
      </div>
    </AppProvider>
  );
};

export default App;