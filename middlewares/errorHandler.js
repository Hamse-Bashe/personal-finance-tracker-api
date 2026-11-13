export const errorHandler = (err, req, res, next) => {
  const status = err.statusCode;
  res.status(status).json({
    success: false,
    message: err.message,
    status,
  });
};
