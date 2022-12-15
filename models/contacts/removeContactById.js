const { Contact } = require("../../db/contactModel");

const removeContactById = async (contactId) => {
  const contact = await Contact.findByIdAndRemove(contactId);

  return contact;
};

module.exports = { removeContactById };
