import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EditModal from "../EditModal";

const Table = ({ products }) => {
  const location = useLocation()?.pathname;
  const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState();
  const handleEditModal = () => {
    setEditModal(true);
  };
  useEffect(() => {
    console.log(editId);
  }, [editId]);
  return (
    <div className="min-h-screen bg-[#0a0a0f] p-8">
      {editModal ? <EditModal setEditModal={setEditModal} editId={editId} /> : null}
      <table
        style={{ overflowY: "auto", maxHeight: "100vh" }}
        className="w-full border-separate border-spacing-0 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]"
      >
        <thead>
          {location === "/products" ? (
            <tr className="border-b border-white/[0.07]">
              <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                T/R
              </th>
              <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                Name
              </th>
              <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                Category
              </th>
              <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                Description
              </th>
              <th className="px-6 py-4 text-left text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                Price
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
          {location === "/products"
            ? products.length
              ? products.map(
                  (
                    { name, price, description, category, id, image },
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
                        {name}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 ring-1 ring-inset ring-indigo-500/20">
                          {category}
                        </span>
                      </td>
                      <td className="max-w-[500px] px-6 py-4 text-sm text-white/40 truncate">
                        {description}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-emerald-400">
                        {price}$
                      </td>
                      <td className="px-6 py-4">
                        <div className="h-12 w-12 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
                          <img
                            src={image}
                            alt={name}
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
                              setEditId(id)
                              handleEditModal()
                            }}
                            className="edit__btn flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60 ring-1 ring-white/10 transition-all duration-150 hover:bg-white/10 hover:text-white hover:ring-white/20"
                          >
                            <i className="ri-pencil-line"></i> Edit
                          </button>
                          <button className="delete flex items-center gap-1.5 rounded-lg bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-400 ring-1 ring-red-500/20 transition-all duration-150 hover:bg-red-500/20 hover:text-red-300">
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

      {products.length === 0 ? (
        <div className="text-center py-12 text-gray-400">No products</div>
      ) : null}
    </div>
  );
};

export default Table;
