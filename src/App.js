import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Dashboard from "@pages/Dashboard";
import POC from "@pages/POC";

const App = () => (
  <>
    <CssBaseline />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/home' element={<Home />} />
      <Route path='/poc' element={<POC />} />
    </Routes>
  </>
);

export default App;
