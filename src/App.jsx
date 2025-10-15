import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
// import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Routes>
      {/* <Route path="/register" element={<RegisterPage />} /> */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default App;
