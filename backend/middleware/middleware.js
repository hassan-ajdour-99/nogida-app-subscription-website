// Customer Error
//404
const pageNotFound404 = (req, res, next) => {
  const error = new Error(`Not FOUND ${res.originalUrl}`);
  res.status(404);
  next(error);
};

// Customer Error
// Error Handler
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { pageNotFound404, errorHandler };
