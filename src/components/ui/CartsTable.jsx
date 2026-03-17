import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CartsEditModal from "../CartsEditModal.jsx";
import CartsAddModal from "../CartsAddModal.jsx";
import CartsViewModal from "../CartsViewModal.jsx";
import axios from "axios";

const CartsTable = ({ carts }) => {
  const location = useLocation()?.pathname;
  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [viewId, setViewId] = useState();
  const [editId, setEditId] = useState();
  const handleEditModal = () => {
    setEditModal(true);
  };

  const handleAddModal = () => {
    setAddModal(true);
  };

  const handleViewModal = () => {
    setViewModal(true);
  };
  useEffect(() => {
    console.log(editId);
  }, [editId]);
  useEffect(() => {
    console.log(viewId);
  }, [viewId]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this cart?")) {
      axios.delete(`http://localhost:3000/carts/${id}`).then((data) => {
        console.log(data);
      });
    } else {
      alert("Cancelled");
    }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0f] p-8">
      {editModal ? (
        <CartsEditModal setEditModal={setEditModal} editId={editId} />
      ) : null}
      {addModal ? <CartsAddModal setAddModal={setAddModal} /> : null}
      {viewModal ? (
        <CartsViewModal setViewModal={setViewModal} viewId={viewId} />
      ) : null}
      {location === "/carts" ? (
        <button onClick={handleAddModal} className="create__btn">
          <i className="ri-add-line"></i> Create Task
        </button>
      ) : null}

      <table
        style={{ overflowY: "auto", maxHeight: "100vh" }}
        className="w-full border-separate border-spacing-0 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]"
      >
        <thead>
          {location === "/carts" ? (
            <tr className="border-b border-white/[0.07]">
              <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                T/R
              </th>
              <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                Make
              </th>
              <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                Model
              </th>
              <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                Year
              </th>
              <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                Price
              </th>
              <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                Color
              </th>
              <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                Image
              </th>
              <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                Action
              </th>
            </tr>
          ) : null}
        </thead>
        <tbody
          style={{ overflowY: "auto", color: "white", maxHeight: "100vh" }}
          className="divide-y divide-white/[0.04]"
        >
          {location === "/carts"
            ? carts.length
              ? carts.map(
                  (
                    { make, model, image, year, id, price, color },
                    index,
                  ) => (
                    <tr
                      key={id}
                      className="group transition-colors duration-200 hover:bg-white/[0.03]"
                    >
                      <td className="px-6 py-4 text-xs font-mono text-white/20">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white/90">
                        {make}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 ring-1 ring-inset ring-indigo-500/20">
                          {model}
                        </span>
                      </td>
                      <td className="max-w-[500px] px-6 py-4 text-sm text-white/40 truncate">
                        {price}$
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-emerald-400">
                        {color}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-emerald-400">
                        {year}
                      </td>
                      <td className="px-6 py-4">
                        <div className="h-12 w-12 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
                          <img
                            src={image}
                            alt={make}
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "contain",
                            }}
                            className="transition-transform duration-300 group-hover:scale-110 p-1"
                          />
                        </div>
                      </td>
                      <td className="action__buttons px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setEditId(id);
                              handleEditModal();
                            }}
                            className="edit__btn flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60 ring-1 ring-white/10 transition-all duration-150 hover:bg-white/10 hover:text-white hover:ring-white/20"
                          >
                            <i className="ri-pencil-line"></i> Edit
                          </button>
                          <button
                            onClick={() => {
                              setViewId(id);
                              handleViewModal();
                            }}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-lg transition-all duration-150 cursor-pointer"
                          >
                            <i className="ri-binoculars-line text-base leading-none"></i>
                            View
                          </button>
                          <button
                            onClick={() => {
                              handleDelete(id);
                            }}
                            className="delete flex items-center gap-1.5 rounded-lg bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-400 ring-1 ring-red-500/20 transition-all duration-150 hover:bg-red-500/20 hover:text-red-300"
                          >
                            <i className="ri-delete-bin-line"></i> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ),
                )
              : null
            : null}
        </tbody>
      </table>

      {carts.length === 0 ? (
        <div className="text-center py-12 text-gray-400">No carts</div>
      ) : null}
    </div>
  );
};

export default CartsTable;
