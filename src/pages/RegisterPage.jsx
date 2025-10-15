// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// /**
//  * Simple admin register page.
//  * Saves credentials to localStorage under key "admin_credentials".
//  * Format: { username, password }
//  *
//  * NOTE: localStorage is NOT secure. Use for simple demos only.
//  */
// const RegisterPage = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!username.trim() || !password || !confirm) {
//       alert("Iltimos barcha maydonlarni to'ldiring.");
//       return;
//     }
//     if (password !== confirm) {
//       alert("Parollar mos emas.");
//       return;
//     }

//     // Save credentials
//     const creds = { username: username.trim(), password };
//     localStorage.setItem("admin_credentials", JSON.stringify(creds));

//     alert("✅ Ro'yxatdan muvaffaqiyatli o'tildi. Endi login bilan kiring.");
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-sky-100 p-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
//         <h1 className="text-2xl font-semibold text-center mb-4">Admin Roʻyxat</h1>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//           <label className="text-sm text-gray-600">Login (username)</label>
//           <input
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300"
//             placeholder="Masalan: admin"
//             autoComplete="username"
//           />

//           <label className="text-sm text-gray-600">Parol</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300"
//             placeholder="Parolni kiriting"
//             autoComplete="new-password"
//           />

//           <label className="text-sm text-gray-600">Parolni tasdiqlang</label>
//           <input
//             type="password"
//             value={confirm}
//             onChange={(e) => setConfirm(e.target.value)}
//             className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300"
//             placeholder="Parolni qayta kiriting"
//             autoComplete="new-password"
//           />

//           <button
//             type="submit"
//             className="mt-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg py-2 font-medium transition"
//           >
//             Roʻyxatdan oʻtish
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-500 mt-4">
//           Allaqachon hisob bormi?{" "}
//           <Link to="/login" className="text-sky-600 hover:underline">
//             Kirish sahifasiga o'tish
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
