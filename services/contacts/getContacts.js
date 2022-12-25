const { Contact } = require("../../models/contactModel");

const getContacts = async () => {
  const contacts = await Contact.find();

  return contacts;
};

module.exports = { getContacts };
