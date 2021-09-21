const mongoose = require("mongoose");
const { NotFound } = require("http-errors");

const validateId = (id) => {
  const valid = mongoose.Types.ObjectId.isValid(id);
  if (!valid) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
};

module.exports = { validateId };
