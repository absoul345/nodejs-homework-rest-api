const { Contact } = require("../../schemas");
const { successRequest } = require("../../helpers");
const { validateId } = require("./validateId");

const updateById = async (req, res) => {
  const { id } = req.params;
  validateId(id);
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  successRequest(res, { result });
};

module.exports = updateById;
