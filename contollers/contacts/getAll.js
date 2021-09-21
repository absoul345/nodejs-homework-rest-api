const { Contact } = require("../../schemas");
const { successRequest } = require("../../helpers");

const getAll = async (req, res) => {
  const result = await Contact.find({});
  successRequest(res, { result });
};

module.exports = getAll;
