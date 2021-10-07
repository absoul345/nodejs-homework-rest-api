const { Contact } = require("../../schemas");
const { serverResponse } = require("../../helpers");
const { validateId } = require("./validateId");

const updateById = async (req, res) => {
  const { id } = req.params;
  // validateId(id);
  const userIdContact = await Contact.find({ owner: req.user._id, _id: id });
  const result = await Contact.findByIdAndUpdate(userIdContact, req.body, {
    new: true,
  });
  if (!result) {
    res
      .status(404)
      .json({ status: "error", code: 404, message: `Not found this id ${id}` });
  }
  serverResponse({ res, data: result });
};

module.exports = updateById;
