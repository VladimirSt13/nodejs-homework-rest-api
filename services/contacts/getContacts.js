const { error } = require("../../helpers/error");
const { Contact } = require("../../models/contactModel");

const getContacts = async (owner) => {
  const contacts = await Contact.find({ owner });
  console.log(contacts);
  if (!contacts) {
    throw error(400, "fail, something wrong");
  }

  return contacts;
};

module.exports = { getContacts };
