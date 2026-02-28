import React from "react";
import { Toastify } from "toastify";
import { useLocation } from "react-router-dom";
const Table = ({ products, users }) => {
  const location = useLocation()?.pathname;

  console.log(location);
  return (
    <div>
      <table style={{ overflowY: "auto", maxHeight: "100vh" }}>
        <thead>
          {location === "/products" ? (
            <tr>
              <th>T/R</th>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          ) : (
            <tr>
              <th>T/R</th>
              <th>Username</th>
              <th>E-mail</th>
              <th>Tel. number</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          )}
        </thead>
        <tbody
          style={{ overflowY: "auto", color: "white", maxHeight: "100vh" }}
        >
          {location === "/products"
            ? products.length
              ? products.map(
                  (
                    { title, price, image, description, category, id },
                    index,
                  ) => (
                    <tr key={id}>
                      <td>{index}</td>
                      <td>{title}</td>
                      <td>{category}</td>
                      <td>{description}</td>
                      <td>{price}</td>
                      <td>
                        <img
                          src={image}
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
                  ),
                )
              : null
            : users.length
              ? users.map(({ id, username, email, phone, password }, index) => (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{password}</td>
                    <td className="action__buttons">
                      <button className="edit__btn">
                        <i className="ri-pencil-line"></i> Edit
                      </button>
                      <button className="delete">
                        <i className="ri-delete-bin-line"></i> Delete
                      </button>
                    </td>
                  </tr>
                ))
              : null}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
