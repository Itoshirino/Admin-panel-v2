import React from "react";
import { useLocation } from "react-router-dom";
const Table = ({ products }) => {
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
              <th>Rating</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          ) : null}
        </thead>
        <tbody
          style={{ overflowY: "auto", color: "white", maxHeight: "100vh" }}
        >
          {location === "/products"
            ? products.length
              ? products.map(
                  (
                    {
                      title,
                      price,
                      description,
                      category,
                      id,
                      rating,
                      thumbnail,
                    },
                    index,
                  ) => (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>{title}</td>
                      <td>{category}</td>
                      <td>{description}</td>
                      <td>{price}</td>
                      <td>{rating}</td>
                      <td>
                        <img
                          src={thumbnail}
                          alt={title}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "contain",
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
            : null}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
