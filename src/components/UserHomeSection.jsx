import { useEffect, useState } from "react";
import axios from "axios";
import { AdminHomeSection } from "./AdminHomeSection";

const API_URL = "https://jsd5-mock-backend.onrender.com/members";

const UserHomeSection = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setUsers(res.data);
    } catch {
      alert("Failed to fetch users");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserHomeSection;
