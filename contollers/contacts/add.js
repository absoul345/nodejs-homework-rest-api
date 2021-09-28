const { Contact } = require("../../schemas");
const { successRequest } = require("../../helpers");

const add = async (req, res) => {
  const newOrder = { ...req.body, owner: req.user._id };
  const result = await Contact.create(newOrder);
  successRequest({
    res,
    data: result,
    status: 201,
    statMessage: "Add success",
  });
};

module.exports = add;
