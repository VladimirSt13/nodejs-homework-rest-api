const { Contact } = require('../db/contactModel');

const getContacts = async () => { 
  const contacts = await Contact.find()
  
  return contacts;
};

const getContactById = async contactId => {
  const contact = Contact.findById(contactId)

  if (!contact) {
    throw Error;
  }

  return contact;
};

const removeContactById = async contactId => {
  const contact = await Contact.findByIdAndRemove(contactId);

  return contact;
};

const addContact = async (body) => {
  const newContact = new Contact(body);

  await newContact.save();

  return newContact;
};

const updateContactById = async (contactId, body) => {
  const updatedContact = await Contact.findByIdAndUpdate(contactId, body)

  return updatedContact
};

module.exports = {
  getContacts,
  getContactById,
  removeContactById,
  addContact,
  updateContactById,
};
