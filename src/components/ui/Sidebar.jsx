import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
      }}
    >
      <div className="wrapper">
        <div className="card">
          <div className="card__left" style={{ height: "100vh" }}>
            <ul className="navbar__list">
              <li>
                <h1>Dashboard</h1>
                <NavLink to="/" className="nav__link">
                  <i className="ri-home-4-line icon1"></i> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/carts" className="nav__link2">
                  <i className="ri-box-3-line icon2"></i> Carts
                </NavLink>
              </li>
              <li>
                <NavLink to="/users" className="nav__link3">
                  <i className="ri-account-box-line icon3"></i> Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="nav__link4">
                  <i className="ri-bar-chart-2-line"></i> Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/settings" className="nav__link5">
                  <i className="ri-settings-4-line"></i> Settings
                </NavLink>
              </li>
              <li>
                <NavLink to="/help" className="nav__link6">
                  <i className="ri-question-line"></i> Help
                </NavLink>
              </li>
            </ul>
            <button
              className="logout"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
