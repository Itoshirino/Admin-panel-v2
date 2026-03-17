import { NavLink } from "react-router-dom";
const Sidebar = () => {
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
                <NavLink to="/products" className="nav__link4">
                  <i className="ri-bar-chart-2-line"></i> Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/users" className="nav__link4">
                  <i className="ri-group-line"></i> Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/carts" className="nav__link4">
                  <i className="ri-shopping-bag-line"></i> Carts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
