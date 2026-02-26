import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "remixicon/fonts/remixicon.css";
import avatar from "../assets/img/image.png";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="card">
        <div className="card__left">
          <ul className="navbar__list">
            <li>
              <h1>Dashboard</h1>
              <Link to="/Dashboard" className="nav__link">
                <i className="ri-home-4-line icon1"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/Carts" className="nav__link2">
                <i className="ri-box-3-line icon2"></i> Carts
              </Link>
            </li>
            <li>
              <Link to="/User" className="nav__link3">
                <i className="ri-account-box-line icon3"></i> Users
              </Link>
            </li>
            <li>
              <Link to="/Analytics" className="nav__link4">
                <i className="ri-bar-chart-2-line"></i> Analytics
              </Link>
            </li>
            <li>
              <Link to="/Settings">
                <i className="ri-settings-4-line"></i> Settings
              </Link>
            </li>
            <li>
              <Link href="../Pages/help.html">
                <i className="ri-question-line"></i> Help
              </Link>
            </li>
          </ul>

          <button
            className="logout"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            LogOut
          </button>
        </div>
        <div className="card__right">
          <nav className="navbar">
            <h2>Admin-Panel</h2>
            <div className="dashboard__user">
              <img src={avatar} className="dashboard__avatar" />
              <div>
                <div className="dashboard__username">Farrux</div>
                <div className="dashboard__user">Web Creator</div>
              </div>
            </div>
          </nav>

          <main className="main">
            <h3>
              <i className="ri-table-line"></i> Product List
            </h3>

            <button className="create__btn" style={{ marginTop: "20px" }}>
              <i className="ri-add-line"></i> Create Task
            </button>
              {/* <div className="modal none">
                <div className="modal__content">
                  <h3>Create Task</h3>

                  <input
                    type="text"
                    placeholder="Title"
                    className="task__title"
                  />
                  <input
                    type="text"
                    placeholder="Category"
                    className="task__category"
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    className="task__desc"
                  />
                  <input
                    type="number"
                    placeholder="Price$"
                    className="task__price"
                  />
                  <input
                    type="text"
                    placeholder="Image URL"
                    className="task__image"
                  />

                  <div className="modal__btn">
                    <button className="task__create">Create</button>
                    <button className="task__cancel">Cancel</button>
                  </div>
                </div>
              </div>
              <div className="edit__modal none">
                <div className="edit__modal__content">
                  <h3>Edit Task</h3>

                  <input
                    type="text"
                    placeholder="Title"
                    className="task__title"
                  />
                  <input
                    type="text"
                    placeholder="Category"
                    className="task__category"
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    className="task__desc"
                  />
                  <input
                    type="number"
                    placeholder="Price$"
                    className="task__price"
                  />
                  <input
                    type="text"
                    placeholder="Image URL"
                    className="task__image"
                  />

                  <div className="edit__modal__btn">
                    <button className="task__create1">Edit</button>
                    <button className="task__cancel1">Cancel</button>
                  </div>
                </div>
              </div> */}
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody className="table__body">
                <tr>
                  <td>5</td>
                  <td>Smart Watch Z10</td>
                  <td>Electronics</td>
                  <td>High-end fitness tracker</td>
                  <td>$129.99</td>
                  <td>
                    <img
                      src=""
                      style={{
                        width: "60px",
                        height: "40px",
                        background: "#333",
                        borderRadius: "4px",
                      }}
                    />
                  </td>
                  <td className="action__buttons">
                    <button className="edit__btn">
                      <i className="ri-pencil-line"></i> Edit
                    </button>
                    <button className="delete">
                      <i className="ri-delete-bin-line"></i> Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
