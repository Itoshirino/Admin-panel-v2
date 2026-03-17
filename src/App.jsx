import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard"
import Products from "./components/Products"
import Users from "./components/Users"
import Carts from "./components/Carts"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/products" element={<Products />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/carts" element={<Carts />}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
