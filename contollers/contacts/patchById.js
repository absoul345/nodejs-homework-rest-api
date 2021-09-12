const contactsOperation = require("../../model/contacts");
const { NotFound } = require("http-errors");

const patchById = async (req, res) => {
  const { id } = req.params;
  const contact = await contactsOperation.patch(Number(id), req.body);
  if (!contact) {
    throw new NotFound(
      `Contacts with id=${id} not found or Email:${req.body.email} or Phone:${req.body.phone} already exist`
    );
  }
  res.json({
    status: "success update",
    code: 200,
    data: { result: contact },
  });
};

module.exports = patchById;
