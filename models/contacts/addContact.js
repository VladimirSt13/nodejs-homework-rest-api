const { Contact } = require("../../db/contactModel");

const addContact = async (body) => {
  const newContact = new Contact(body);

  await newContact.save();

  return newContact;
};

module.exports = { addContact };
