import axios from "axios";
import React, { useState } from "react";

const AddModal = ({ setAddModal }) => {
  const [addFormData, setAddFormData] = useState({
    name: "",
    price: 0,
    category: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setAddFormData({
      ...addFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3000/products`, addFormData).then(() => {
      setAddModal(false);
    });
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d14] shadow-2xl shadow-black/60 box1">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute -top-20 left-1/2 h-40 w-60 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative px-8 pt-8 pb-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-indigo-400">
            Dashboard
          </p>
          <h2 className="mt-1 text-2xl font-light tracking-tight text-white">
            Add Product
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="relative px-8 pb-8 space-y-4">
          <div className="group relative">
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-white/30">
              Name
            </label>
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="write name"
              name="name"
              value={addFormData.name}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-indigo-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div className="group relative">
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-white/30">
              Price
            </label>
            <input
              required
              onChange={handleChange}
              type="number"
              placeholder="write price"
              name="price"
              value={addFormData.price}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-emerald-400 placeholder-white/20 outline-none transition-all duration-200 focus:border-emerald-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          <div className="group relative">
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-white/30">
              Category
            </label>
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="write category"
              name="category"
              value={addFormData.category}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-indigo-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div className="group relative">
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-white/30">
              Image URL
            </label>
            <input
              required
              onChange={handleChange}
              type="url"
              placeholder="write image"
              name="image"
              value={addFormData.image}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-violet-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-500/20"
            />
          </div>

          <div className="group relative">
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-white/30">
              Description
            </label>
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="write description"
              name="description"
              value={addFormData.description}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-indigo-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div className="my-2 h-px bg-white/[0.06]" />

          <div className="box flex gap-3 pt-1 ">
            <button
              type="submit"
              className="relative btn flex-1 overflow-hidden rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setAddModal(false)}
              className="flex-1 btn2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/50 transition-all duration-200 hover:bg-white/[0.08] hover:text-white/80 hover:border-white/20"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
