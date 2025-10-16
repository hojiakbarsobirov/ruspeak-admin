import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiLock } from "react-icons/fi";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const ADMIN_LOGIN = "ruspeakadmin"; // login
  const ADMIN_PASSWORD = "ruspeak123"; // parol

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      setError("❌ Login yoki parol noto‘g‘ri!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Ruspeak Admin
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
          Tizimga kirish uchun ma’lumotlaringizni kiriting
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:border-blue-500 transition-all">
            <FiUser className="text-gray-400 text-xl mr-2" />
            <input
              type="text"
              placeholder="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="flex-1 outline-none text-gray-700"
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 focus-within:border-blue-500 transition-all">
            <FiLock className="text-gray-400 text-xl mr-2" />
            <input
              type="password"
              placeholder="Parol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 outline-none text-gray-700"
              required
            />
          </div>

          {error && <p className="text-red-500 text-center text-sm">{error}</p>}

          <button
            type="submit"
            className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            Tizimga kirish →
          </button>
        </form>

        <p className="text-center text-gray-400 text-xs sm:text-sm mt-6">
          © 2025 Ruspeak. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
