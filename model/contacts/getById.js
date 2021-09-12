const contacts = require("./contacts.json");

const getById = async (id) => {
  const findContact = contacts.find((item) => item.id === id);
  if (!findContact) {
    return null;
  }
  return findContact;
};

module.exports = getById;
