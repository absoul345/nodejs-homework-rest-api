const contacts = require("./contacts.json");
const isSameContact = require("./isSameContact");
const updateContacts = require("./updateList");
const { v4 } = require("uuid");

const add = async (body) => {
  if (isSameContact(body)) {
    return null;
  }
  const newContact = { id: v4(), ...body };
  contacts.push(newContact);
  await updateContacts(contacts);
  return contacts;
};

module.exports = add;
