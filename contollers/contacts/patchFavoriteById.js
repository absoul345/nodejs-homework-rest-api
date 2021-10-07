const { Contact } = require("../../schemas");
const { validateId } = require("./validateId");
const { serverResponse } = require("../../helpers");

const patchFavoriteById = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;
  validateId(id);
  const userIdContact = await Contact.find({ owner: req.user._id, _id: id });
  const result = await Contact.findByIdAndUpdate(
    userIdContact,
    { favorite },
    { new: true }
  );
  if (!result) {
    res
      .status(404)
      .json({ status: "error", code: 404, message: `Not found this id ${id}` });
  }
  serverResponse({ res, data: result });
};

module.exports = patchFavoriteById;
