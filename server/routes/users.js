import express from 'express';
import { createUser,
         getUsers,
         updateUser,
         deleteUser}
  from '../controllers/userController.js';

const router = express.Router();

// Route to create a user
router.post("/", createUser);

// Route to get all users
router.get("/", getUsers);

// Route to update a user by ID
router.put("/:id", updateUser);

// Route to delete a user by ID
router.delete("/:id", deleteUser);

// Export the router
export default router;