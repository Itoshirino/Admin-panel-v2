import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginForm from "../components/ui/LoginForm.jsx";
import Dashboard from "../components/Dashboard.jsx";
import { useEffect } from "react";
import Products from "../components/Products.jsx";
const Router = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);
  return (
    <div>
      <Routes>
        {token ? (
          <Route path="/" element={<Dashboard />}>
            <Route path="/products" element={<Products />} />
          </Route>
        ) : null}
      </Routes>
    </div>
  );
};

export default Router;
