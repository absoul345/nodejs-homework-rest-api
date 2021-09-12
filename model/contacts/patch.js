const contacts = require("./contacts.json");
const updateContacts = require("./updateList");
const isSameContact = require("./isSameContact");

const patch = async (id, body) => {
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1 || isSameContact(body)) {
    return null;
  }
  contacts[idx] = { id, ...body };
  await updateContacts(contacts);
  return contacts;
};

module.exports = patch;
