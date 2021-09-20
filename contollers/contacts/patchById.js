const { Contact } = require("../../schemas");
const { validateId } = require("./validateId");
const { successRequest } = require("../../helpers");

const patchById = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;
  validateId(id);
  const result = await Contact.findByIdAndUpdate(
    id,
    { favorite },
    { new: true }
  );
  successRequest(res, { result });
};

module.exports = patchById;
