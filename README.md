# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Admin-panel-v2






 <div>
      <div className="wrapper">
        <div className="card">
          <div className="card__left">
            <ul className="navbar__list">
              <li>
                <h1>Dashboard</h1>
                <NavLink to="/dashboard" className="nav__link">
                  <i className="ri-home-4-line icon1"></i> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/carts" className="nav__link2">
                  <i className="ri-box-3-line icon2"></i> Carts
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users" className="nav__link3">
                  <i className="ri-account-box-line icon3"></i> Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/products" className="nav__link4">
                  <i className="ri-bar-chart-2-line"></i> Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/settings" className="nav__link5">
                  <i className="ri-settings-4-line"></i> Settings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/help" className="nav__link6">
                  <i className="ri-question-line"></i> Help
                </NavLink>
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
    </div>