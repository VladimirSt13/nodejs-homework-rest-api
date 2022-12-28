const asyncWrapper = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch((error) => next(error));
  };
};

const errorHandler = (err, req, res, next) => {
  const { status = 500, message = "Internal Server Error" } = err;

  res.status(status).json({ message });
};

module.exports = {
  asyncWrapper,
  errorHandler,
};
