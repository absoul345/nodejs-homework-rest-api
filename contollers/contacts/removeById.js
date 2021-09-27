const { Contact } = require("../../schemas");
const { validateId } = require("./validateId");
const { successRequest } = require("../../helpers");

const removeById = async (req, res) => {
  const { id } = req.params;
  validateId(id);
  const userIdContact = await Contact.find({ owner: req.user._id, _id: id });
  const result = await Contact.findByIdAndDelete(userIdContact);
  if (!result) {
    res
      .status(404)
      .json({ status: "error", code: 404, message: `Not found this id ${id}` });
  }
  successRequest({ res, data: result });
};

module.exports = removeById;
