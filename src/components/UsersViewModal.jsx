import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const UsersViewModal = ({ setViewModal, viewId }) => {
  const [viewFormData, viewSetFormData] = useState({
    id: viewId,
    name: "",
    email: 0,
    role: "",
    avatar: "",
    joined: "",
    country: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${viewId}`).then((data) => {
      const res = data?.data;
      viewSetFormData({
        id: viewId,
        name: res?.name,
        email: res?.email,
        role: res?.role,
        avatar: res?.avatar,
        joined: res?.joined,
        country: res?.country,
      });
    });
  }, [viewId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/users/${viewId}`, viewFormData)
      .then((data) => {
        console.log(data);
        setViewModal(false);
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
            View users
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="relative px-8 pb-8 space-y-4">
          <div className="group relative">
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-white/30">
              Name
            </label>
            <input
              disabled
              type="text"
              placeholder="write name"
              name="name"
              value={viewFormData.name}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-indigo-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div className="group relative">
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-white/30">
              E-mail
            </label>
            <input
              disabled
              type="text"
              placeholder="write email"
              name="email"
              value={viewFormData.email}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-emerald-400 placeholder-white/20 outline-none transition-all duration-200 focus:border-emerald-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          <div className="group relative">
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-white/30">
              Role
            </label>
            <input
              disabled
              type="text"
              placeholder="write role"
              name="role"
              value={viewFormData.role}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-indigo-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div className="group relative">
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-white/30">
              Avatar URL
            </label>
            <input
              disabled
              type="url"
              placeholder="write avatar"
              name="avatar"
              value={viewFormData.avatar}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-violet-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-500/20"
            />
          </div>

          <div className="group relative">
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-white/30">
              Joined
            </label>
            <input
              disabled
              type="text"
              placeholder="write joined"
              name="joined"
              value={viewFormData.joined}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-indigo-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div className="group relative">
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-white/30">
              Country
            </label>
            <input
              disabled
              type="text"
              placeholder="write country"
              name="country"
              value={viewFormData.country}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-indigo-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div className="my-2 h-px bg-white/[0.06]" />

          <div className="box flex gap-3 pt-1">
            <button
              type="button"
              onClick={() => setViewModal(false)}
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

export default UsersViewModal;
