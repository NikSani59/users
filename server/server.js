import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import users from './routes/users.js';

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

// routes
app.use('/users', users);

app.get('/', (req, res) => {
  res.send('Welcome to the User Management API');
});

// Starts the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
