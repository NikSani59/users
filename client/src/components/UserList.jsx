import { useState, useEffect } from "react";
import { getAllUsers, deleteUser } from "../services/api";
import { toast } from "react-hot-toast";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getAllUsers();
        setUsers(userData);
      } catch (err) {
        toast.error(err.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      toast.error(err.message || "Failed to delete user");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>User List:</h1>
      <ol>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email} - {user.address}
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UserList;
