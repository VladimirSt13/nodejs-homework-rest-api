const { Contact } = require("../../models/contactModel");

const updateContactById = async (contactId, owner, body) => {
  const contact = await Contact.findOneAndUpdate(
    { _id: contactId, owner },
    { $set: body },
    { new: true }
  );

  return contact;
};

module.exports = { updateContactById };
