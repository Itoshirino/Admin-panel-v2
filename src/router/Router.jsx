import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginForm from "../components/ui/LoginForm.jsx";
import Dashboard from "../components/Dashboard.jsx";
import { useEffect } from "react";
import Carts from "../components/Carts.jsx";
import Users from "../components/Users.jsx";
import Products from "../components/Products.jsx";
import Settings from "../components/Settings.jsx";
import Help from "../components/Help.jsx";
const Router = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);
  return (
    <div>
      <Routes>
        {token ? (
          <Route path="/" element={<Dashboard />}>
            <Route path="/users" element={<Users />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/products" element={<Products />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
          </Route>
        ) : (
          <Route path="/login" element={<LoginForm />} />
        )}
      </Routes>
    </div>
  );
};

export default Router;
