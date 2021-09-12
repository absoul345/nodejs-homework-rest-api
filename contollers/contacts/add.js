const contactsOperation = require("../../model/contacts");
const { NotFound } = require("http-errors");

const add = async (req, res) => {
  const contacts = await contactsOperation.add(req.body);
  if (!contacts) {
    throw new NotFound("This contact already exist");
  }
  res.status(201).json({
    status: "add success",
    code: 201,
    data: { result: contacts },
  });
};

module.exports = add;
