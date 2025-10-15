import React from "react";

const LogoutModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Chiqishni tasdiqlaysizmi?
        </h2>
        <p className="text-gray-500 mb-6">
          Siz tizimdan chiqmoqchisiz. Davom etishni xohlaysizmi?
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg text-gray-800 transition"
          >
            Bekor qilish
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
          >
            Ha, chiqish
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
