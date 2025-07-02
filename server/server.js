import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import users from './routes/users.js';

// Load environment variables from .env file
dotenv.config();

// Environment variables
const port = process.env.PORT
const mongoURL = process.env.MONGO_URL

// Create an Express application
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow requests from the frontend running on localhost:5173
app.use(cors({
  origin: 'http://localhost:5173'
}))

// routes
app.use('/api/users', users);

// connect to a Mongo Database and start the server
mongoose.connect(mongoURL).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
  process.exit(1);
});
