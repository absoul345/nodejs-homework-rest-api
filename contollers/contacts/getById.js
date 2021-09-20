const { Contact } = require("../../schemas");
const { successRequest } = require("../../helpers");
const { validateId } = require("./validateId");

const getById = async (req, res) => {
  const { id } = req.params;
  validateId(id);
  const result = await Contact.findById(id);
  successRequest(res, { result });
};

module.exports = getById;
