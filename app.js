import express from 'express';
import cors from 'cors';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';
import { ErrorHandler } from './middlewares/err.handler.js';



// create the app
const app = express();

// initialize middlewares
app.use(cors());
app.use(express.json());
app.set("trust proxy", true); // for req.ip to work correctly behind proxies

// import routes
//error handler
app.use(ErrorHandler);

// load environment variables
dotenv.config();

// connect to MongoDB
mongoose.connect(process.env.MONGODB_CONN_STRING).then(() => {
  console.log('Connected to MongoDB...');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// export the app
export default app;