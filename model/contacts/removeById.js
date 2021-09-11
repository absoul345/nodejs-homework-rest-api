const contacts = require("./contacts.json");
const updateContacts = require("./updateList");

const removeContact = async (id) => {
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  contacts.splice(idx, 1);
  await updateContacts(contacts);
  return contacts;
};

module.exports = removeContact;
