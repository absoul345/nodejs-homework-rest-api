const { Contact } = require("../../schemas");
const { serverResponse } = require("../../helpers");
const { validateId } = require("./validateId");

const getById = async (req, res) => {
  const { id } = req.params;
  validateId(id);
  const result = await Contact.find({ owner: req.user._id, _id: id });
  if (!result.length) {
    res
      .status(404)
      .json({ status: "error", code: 404, message: `Not found this id ${id}` });
  }
  serverResponse({ res, data: result });
};

module.exports = getById;
