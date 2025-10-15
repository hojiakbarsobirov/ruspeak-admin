import React from "react";

const ConfirmModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] sm:w-[400px] text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Ma’lumotni o‘chirmoqchimisiz?
        </h3>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all"
          >
            Ha, o‘chirish
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition-all"
          >
            Bekor qilish
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
