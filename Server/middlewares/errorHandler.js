const errorHandler = (err, req, res) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;
