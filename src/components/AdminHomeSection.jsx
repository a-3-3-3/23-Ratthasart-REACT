import { Outlet, Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL1 = "https://jsd5-mock-backend.onrender.com/members";
const API_URL2 = "https://jsd5-mock-backend.onrender.com/member";

export const AdminHomeSection = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL1);
      setUsers(res.data);
    } catch {
      alert("Failed to fetch users");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    await axios.delete(`${API_URL2}/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="mx-auto min-w-7xl">
          <thead>
            <tr className="bg-gray-300">
              <th className="p-2 border-2 border-slate-500">Name</th>
              <th className="p-2 border-2 border-slate-500">Last Name</th>
              <th className="p-2 border-2 border-slate-500">Position</th>
              <th className="p-2 border-2 border-slate-500">Active</th>
            </tr>
          </thead>
          <tbody>
            {users.map((member) => (
              <tr key={member.id} className="bg-white text-center">
                <td className="p-2 border-2 border-slate-500">{member.name}</td>
                <td className="p-2 border-2 border-slate-500">
                  {member.lastname}
                </td>
                <td className="p-2 border-2 border-slate-500">
                  {member.position}
                </td>
                <td className="p-2 border-2 border-slate-500">
                  <button
                    className="cursor-pointer text-red-500 font-bold"
                    onClick={() => handleDelete(member.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export const UserForm = () => {
  const [form, setForm] = useState({ name: "", lastname: "", position: "" });

  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      axios.get(`${API_URL1}/${userId}`).then((res) =>
        setForm({
          name: res.data.name,
          lastname: res.data.lastname,
          position: res.data.position,
        })
      );
    }
  }, [userId]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!window.confirm("Create this user?")) return;
    await axios.post(API_URL1, form);
    navigate("/");
  };

  return (
    <div className="px-10">
      <div className="text-2xl font-bold pl-6 pb-6">Create User Here</div>
      <form onSubmit={handleSubmit} className="flex justify-evenly gap-5">
        <input
          className="w-2/7 bg-white px-4 py-4 rounded"
          onChange={handleChange}
          value={form.name}
          name="name"
          placeholder="Name"
        />
        <input
          className="w-2/7 bg-white px-4 py-4 rounded"
          onChange={handleChange}
          value={form.lastname}
          name="lastname"
          placeholder="Last Name"
        />
        <input
          className="w-2/7 bg-white px-4 py-4 rounded"
          onChange={handleChange}
          value={form.position}
          name="position"
          placeholder="Position"
        />
        <button type="submit" className="bg-blue-500 p-4 rounded">
          Create
        </button>
      </form>
    </div>
  );
};
