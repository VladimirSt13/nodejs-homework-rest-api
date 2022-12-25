const { Contact } = require("../../models/contactModel");

const removeContactById = async (contactId) => {
  const contact = await Contact.findByIdAndRemove(contactId);

  return contact;
};

module.exports = { removeContactById };
