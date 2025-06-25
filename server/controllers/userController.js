import User from "../models/userModel.js";

// @desc create a user
// @route POST /users
export const createUser = async (req, res) => {
    try {
        const { name, email, address } = req.body;
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = new User({
            name,
            email,
            address
        })
        await user.save();
        res.status(201).json({ message: "User created successfully", user });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
}

// @desc get all users
// @route GET /users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(users);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
}

// @desc update a user
// @route PUT /users/:id
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, address } = req.body;
        const user = await User.findByIdAndUpdate(id,
            { name, email, address },
            { new: true, runValidators: true }
        )
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", user });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "error updating the user" });
    }
}

// @desc delete a user
// @route DELETE /users/:id
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "error deleting the user" });
    }
}