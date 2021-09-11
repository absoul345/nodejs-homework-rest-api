const contactsOperation = require("../../model/contacts");

const { NotFound } = require("http-errors");

const removeById = async (req, res) => {
  const { id } = req.params;
  const contact = await contactsOperation.remove(Number(id));
  if (!contact) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  res.json({
    status: "success deleted",
    code: 200,
    data: { result: contact },
  });
};

module.exports = removeById;
