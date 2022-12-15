const { Contact } = require("../../db/contactModel");

const updateContactById = async (contactId, body) => {
  const contact = await Contact.findByIdAndUpdate(contactId, { $set: body }, { new: true });

  return contact;
};

module.exports = { updateContactById };
