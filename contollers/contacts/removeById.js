const { Contact } = require("../../schemas");
const { validateId } = require("./validateId");
const { successRequest } = require("../../helpers");

const removeById = async (req, res) => {
  const { id } = req.params;
  validateId(id);
  const result = await Contact.findByIdAndDelete(id);
  successRequest(res, { result });
};

module.exports = removeById;
