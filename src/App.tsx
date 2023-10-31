import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import DepositAmount from "./components/DepositAmount";
import Profile from "./components/Profile";
import Getloan from "./components/Getloan";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/applyloan" element={<Dashboard />} />
          <Route path="/dashboard" element={<DepositAmount />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/getloan" element={<Getloan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
