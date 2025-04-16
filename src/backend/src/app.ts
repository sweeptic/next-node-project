import 'dotenv/config';
import express, { ErrorRequestHandler } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import moviesRoutes from './routes/movies';

const app = express();

// eslint-disable-next-line max-len
const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.hze9xrz.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=${process.env.MONGODB_CLUSTERNAME}`;

app.use(cors());

app.use(moviesRoutes);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (error, req, res, _next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({ message, data });
};

app.use(errorHandler);

mongoose
  .connect(connectionString)
  .then(() => {
    app.listen(8080);
  })
  // eslint-disable-next-line no-console
  .catch((err) => console.log(err));
