import { useState } from "react";
import { updateUser } from "../services/api";
import { toast } from "react-hot-toast";

const UpdateUser = ({ userToEdit, onUserUpdated, onCancel }) => {
  const [user, setUser] = useState({
    name: userToEdit?.name || "",
    email: userToEdit?.email || "",
    address: userToEdit?.address || "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUser(userToEdit._id, user);
      toast.success("User updated successfully!");
      onUserUpdated(); // Callback to refresh the user list
    } catch (err) {
      toast.error(err.message || "Failed to update user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleInputChange}
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update User"}
        </button>
        <button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
