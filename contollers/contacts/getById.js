const contactsOperation = require("../../model/contacts");
const { NotFound } = require("http-errors");

const getById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const contact = await contactsOperation.getById(Number(id));
  console.log(contact);
  if (!contact) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  res.json({ status: "success", code: 200, data: { result: contact } });
};

module.exports = getById;
