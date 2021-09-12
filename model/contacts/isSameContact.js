const contacts = require("./contacts.json");

const isSameContact = (body) => {
  const findContact = contacts.find(
    (item) => item.phone === body.phone || item.email === body.email
  );
  return findContact;
};

module.exports = isSameContact;
