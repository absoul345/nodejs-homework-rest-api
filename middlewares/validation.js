const validation = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res
        .status(404)
        .json({ status: "error", code: 404, message: error.message });
    }
    next();
  };
  return func;
};

module.exports = validation;
