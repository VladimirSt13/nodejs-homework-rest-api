const fs = require('fs').promises;
const path = require('path');
const shortid = require('shortid');
const contactsPath = path.join(__dirname, 'contacts.json');

const readData = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return [];
  }
}

const updateContactsInDb = async (data) => {
   try {
     await fs.writeFile(contactsPath, JSON.stringify(data));
     return data;
   } catch (error) {
     console.error(error);
   }
}

const listContacts = async () => { 
  return await readData();
};

const getContactById = async contactId => {
  const contacts = await readData();

  const contact = contacts.find(contact => contact.id === contactId);

  if (!contact) {
    return;
  }

  return contact;
};

const removeContact = async contactId => {
  const contacts = await readData();

  const contact = contacts.find(contact => contact.id === contactId);
  
  if (!contact) {
    return;
  }

  const updatedContacts = contacts.filter(contact => contact.id !== contactId);
  
  updateContactsInDb(updatedContacts);

  return contact;
};

const addContact = async (body) => {
  const contacts = await readData();

  const isExistContactInDb = contacts.findIndex(
    contact => contact.name.toLowerCase() === body.name.toLowerCase()
  );

  if (isExistContactInDb > -1) {
    return -1;
  }

  const newContact = {
    id: shortid.generate(5),
    ...body
  };

  const updatedContacts = [...contacts, newContact];

  updateContactsInDb(updatedContacts);

  return newContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await readData();

  const isExistContactInDb = contacts.findIndex(
    contact => contact.id === contactId
  );

  if (isExistContactInDb === -1) {
    return;
  }

  contacts[isExistContactInDb] = { ...contacts[isExistContactInDb], ...body };
  
  updateContactsInDb(contacts);

  return contacts[isExistContactInDb];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
