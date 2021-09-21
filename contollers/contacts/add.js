const { Contact } = require("../../schemas");
const { successRequest } = require("../../helpers");

const add = async (req, res) => {
  const result = await Contact.create(req.body);
  successRequest(res, { result }, 201);
};

module.exports = add;
