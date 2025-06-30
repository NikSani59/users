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
app.use(cors());

// routes
app.use('/users', users);

app.get('/', (req, res) => {
  res.send('Welcome to the User Management API');
});

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
