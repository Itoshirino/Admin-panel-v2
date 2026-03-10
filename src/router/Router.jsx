import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginForm from "../components/ui/LoginForm.jsx";
import Dashboard from "../components/Dashboard.jsx";
import Products from "../components/Products.jsx";

const Router = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <Routes>
      {token ? (
        <Route path="/" element={<Dashboard />}>
          <Route path="/products" element={<Products />} />
        </Route>
      ) : null}
    </Routes>
  );
};

export default Router;
