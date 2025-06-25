import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Environment variables
const port = process.env.PORT

// Create an Express application
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Starts the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
