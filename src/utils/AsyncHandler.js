const asyncHandler = (handleFunction) => {
  return async (req, res, next) => {
    try {
      await handleFunction(req, res, next);
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
};

export { asyncHandler };
