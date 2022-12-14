const { Contact } = require('../db/contactModel');

const getContacts = async () => { 
  const contacts = await Contact.find()
  
  return contacts;
};

const getContactById = async contactId => {
  const contact = await Contact.findById(contactId)

  return contact;
};

const addContact = async (body) => {
  const newContact = new Contact(body);

  await newContact.save();

  return newContact;
};

const updateContactById = async (contactId, body) => {
  const contact = await Contact.findByIdAndUpdate(contactId, { $set: body }, { new: true });

  return contact;
};

const updateStatusContactById = async (contactId, body) => {
  const contact = await Contact.findByIdAndUpdate(contactId, { $set: body }, { new: true });

  return contact;
};

const removeContactById = async (contactId) => {
  const contact = await Contact.findByIdAndRemove(contactId);

  return contact;
};

module.exports = {
  getContacts,
  getContactById,
  addContact,
  updateContactById,
  updateStatusContactById,
  removeContactById,
};
