const contactsOperation = require("../../model/contacts");
const { NotFound } = require("http-errors");

const getAll = async (req, res) => {
  const contacts = await contactsOperation.getAll();
  if (!contacts) {
    throw new NotFound();
  }
  res.json({
    status: "success",
    code: 200,
    data: { result: contacts },
  });
};

module.exports = getAll;
