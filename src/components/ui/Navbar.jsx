import React from "react";
import avatar from "../../assets/img/image.png";
const Navbar = () => {
  return (
    <div style={{ width: "100%", height: "80px" }}>
      <div
        className="card__right"
        style={{ color: "white", background: "white" }}
      >
        <nav className="navbar" style={{ padding: "3px 3px" }}>
          <h2>Admin-Panel</h2>
          <div className="dashboard__user">
            <img src={avatar} className="dashboard__avatar" />
            <div>
              <div className="dashboard__username">Farrux</div>
              <div className="dashboard__user">Web Creator</div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
