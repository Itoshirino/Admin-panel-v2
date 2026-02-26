import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginForm from "../components/ui/LoginForm.jsx";
import Dashboard from "../components/Dashboard.jsx";
import { useEffect } from "react";
import User from "../components/User.jsx";

const Router = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/Dashboard");
    } else {
      navigate("/");
    }
  }, [token]);
  return (
    <div>
      <Routes>
        {token ? (
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="/User" element={<User />} />
          </Route>
        ) : (
          <Route path="/" element={<LoginForm />} />
        )}
      </Routes>

      <Routes></Routes>
    </div>
  );
};

export default Router;
