const fs = require('fs').promises;
const path = require('path');
const shortid = require('shortid');
const contactsPath = path.join(__dirname, 'contacts.json');

async function readData() {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return [];
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
  
  try {
    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
  } catch (error) {
    console.error(error);
  }
};

const addContact = async (body) => {
  const contacts = await readData();

  const isExistContactInDb = contacts.findIndex(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  if (isExistContactInDb > -1) {
    return -1;
  }

  const newContact = {
    id: shortid.generate(5),
    ...body
  };

  const updatedContacts = [...contacts, newContact];

  try {
    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
    return updatedContacts;
  } catch (error) {
    console.error(error);
  }

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
  
  try {
    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
    return updatedContacts;
  } catch (error) {
    console.error(error);
  }

};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
