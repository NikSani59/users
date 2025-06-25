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