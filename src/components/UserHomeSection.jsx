import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
        <table className="min-w-7xl">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Last Name</th>
              <th className="p-2 border">Position</th>
            </tr>
          </thead>
          <tbody>
            {users.map((member) => (
              <tr key={member.id} className="bg-gray-100">
                <td className="p-2 border">{member.name}</td>
                <td className="p-2 border">{member.lastname}</td>
                <td className="p-2 border">{member.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserHomeSection;
