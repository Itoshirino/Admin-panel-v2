import React from "react";
import "../App.css";
import "remixicon/fonts/remixicon.css";
import Sidebar from "./ui/Sidebar";
import Navbar from "./ui/Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{ width: "100vw", display: "flex", flexDirection: "column" }}
        >
          <Navbar />
          <div style={{ maxHeight: "100vh", overflow: "auto" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
