import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDb from "./config/db.js";
import { Products } from "./data/products.js";
import { pageNotFound404, errorHandler } from "./middleware/middleware.js";

dotenv.config();

connectDb();

const app = express();

app.get("/", (req, res) => {
  res.send("Api is Running .....");
});

// All Products
app.get("/products", (req, res) => {
  res.json(Products);
});

// Product by Id
app.get("/product/:id", (req, res) => {
  const product = Products.find((pro) => pro.id === req.params.id);

  res.json(product);
});

// 404
app.use((req, res, next) => {
  const error = new Error(`Not FOUND ${res.originalUrl}`);
  res.status(404);
  next(error);
});

// Custom Errors
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(
    `"Server is Running on ${MODE} in port ${PORT} "`.yellow.underline
  )
);
