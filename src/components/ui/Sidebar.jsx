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
                <li>
                  <button onClick={OpenModal} className="create__btn">
                    <i className="ri-add-line"></i> Create Task
                  </button>
                </li>
                <li>
                  <div class="modal none">
                    <div class="modal__content">
                      <h3>Create Task</h3>

                      <input
                        type="text"
                        placeholder="Title"
                        class="task__title"
                      />
                      <input
                        type="text"
                        placeholder="Category"
                        class="task__category"
                      />
                      <input
                        type="text"
                        placeholder="Description"
                        class="task__desc"
                      />
                      <input
                        type="number"
                        placeholder="Price$"
                        class="task__price"
                      />
                      <input
                        type="text"
                        placeholder="Image URL"
                        class="task__image"
                      />

                      <div class="modal__btn">
                        <button class="task__create">Create</button>
                        <button class="task__cancel">Cancel</button>
                      </div>
                    </div>
                  </div>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
