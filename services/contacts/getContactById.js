const { error } = require("../../helpers/error");
const { Contact } = require("../../models/contactModel");

const getContactById = async (contactId, owner) => {
  const contact = await Contact.find({ _id: contactId, owner });

  if (!contact) {
    throw error()
  }

  return contact;
};

module.exports = { getContactById };
