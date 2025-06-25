import express from 'express';
import { createUser } from '../controllers/userController.js';

const router = express.Router();

// Route to create a user
router.post("/", createUser);

// Export the router
export default router;