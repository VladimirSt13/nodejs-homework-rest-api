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

  return contacts.find(contact => contact.id === contactId.toString());
};

const removeContact = async contactId => {
  const contacts = await readData();

  const isExistContactInDb = contacts.findIndex(contact => contact.id === contactId.toString());

  if (isExistContactInDb === -1) {
    return -1;
  }

  const updatedContacts = contacts.filter(contact => contact.id !== contactId.toString());
  
  updateContactsInDb(updatedContacts);
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
    return -1;
  }

  contacts[isExistContactInDb] = { ...contacts[isExistContactInDb], ...body };
  
  updateContactsInDb(contacts);

};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
