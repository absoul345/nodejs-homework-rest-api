const contacts = require("./contacts.json");

const getAll = async () => {
  return contacts;
};

module.exports = getAll;
