const { Contact } = require("../../models/contactModel");

const getContacts = async (owner) => {
  const contacts = await Contact.find({ owner });

  return contacts;
};

module.exports = { getContacts };
