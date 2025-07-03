import { useState, useEffect } from "react";
import { getAllUsers } from "../services/api";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getAllUsers();
        setUsers(userData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>User List:</h1>
      <ol>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email} - {user.address}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UserList;
