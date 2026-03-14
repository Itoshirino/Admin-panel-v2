import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const modal = document.querySelector(".modal");
  const OpenModal = () => {
    modal.classList.add(".none");
  };
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

             
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
