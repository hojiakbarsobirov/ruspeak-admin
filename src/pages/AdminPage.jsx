import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../components/ConfirmModal";
import LogoutModal from "../components/LogoutModal";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const snapshot = await getDocs(collection(db, "registrations"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      data.sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds);
      setUsers(data);
    } catch (error) {
      console.error("Xatolik:", error);
      alert("⚠️ Ma’lumotlarni yuklashda xatolik yuz berdi!");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "registrations", id));
    setUsers(users.filter((u) => u.id !== id));
    setShowModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name?.toLowerCase().includes(search.toLowerCase()) ||
      u.phone?.includes(search)
  );

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      {/* Modal oynalar */}
      <ConfirmModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => handleDelete(selectedId)}
      />
      <LogoutModal
        show={showLogout}
        onClose={() => setShowLogout(false)}
        onConfirm={handleLogout}
      />

      {/* Header */}
      <header className="bg-white text-white p-4 flex flex-col sm:flex-row justify-between items-center">
        {/* <h1 className="text-2xl sm:text-3xl font-bold">RuSpeak Admin Panel</h1> */}
        <img className="w-[200px]" src="/logotip.png" alt="" />
        <div className="flex gap-2 mt-2 sm:mt-0">
          <button
            onClick={fetchUsers}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
          >
            🔄 Yangilash
          </button>
          <button
            onClick={() => setShowLogout(true)}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white"
          >
            🚪 Chiqish
          </button>
        </div>
      </header>

      {/* Qidiruv */}
      <div className="p-4 border-b border-gray-300">
        <input
          type="text"
          placeholder="🔍 Ism yoki raqam orqali qidirish..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-blue-600"
        />
      </div>

      {/* Jadval */}
      <div className="flex-1 overflow-auto">
        {loading ? (
          <p className="text-center text-gray-500 py-10">⏳ Ma’lumotlar yuklanmoqda...</p>
        ) : filteredUsers.length === 0 ? (
          <p className="text-center text-gray-500 py-10">Hech qanday foydalanuvchi topilmadi 😕</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                <th className="border p-2 text-left">Ism</th>
                <th className="border p-2 text-left">Telefon</th>
                <th className="border p-2 text-left">Qo‘shimcha raqam</th>
                <th className="border p-2 text-left">Sana</th>
                <th className="border p-2 text-center">Harakat</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.phone}</td>
                  <td className="border p-2">{user.extraPhone || "-"}</td>
                  <td className="border p-2">{user.createdAt?.seconds ? new Date(user.createdAt.seconds * 1000).toLocaleString() : "-"}</td>
                  <td className="border p-2 text-center">
                    <button
                      onClick={() => {
                        setSelectedId(user.id);
                        setShowModal(true);
                      }}
                      className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded"
                    >
                      🗑 O‘chirish
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-3 text-center">
        © {new Date().getFullYear()} Admin Panel
      </footer>
    </div>
  );
};

export default AdminPage;
