const {
  getContacts,
  getContactById,
  addContact,
  updateContactById,
  updateStatusContactById,
  removeContactById
} = require("../models/contacts");

const getContactsController = async (req, res, next) => {
  const contacts = await getContacts();

  if (!contacts) {
    return res.status(400).json({ message: 'fail, something wrong' });
  }

  res.json({ contacts, message: 'success' });
};

const getContactByIdController = async (req, res, next) => {
  const { contactId: id } = req.params;
  const contact = await getContactById(id);

  if (!contact) {
    return res.status(404).json({ message: `Not found` });
  }

  res.json({ contact, message: 'success' });
};

const addContactController = async (req, res, next) => {
  const contact = req.body;
  
  if (!contact) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  
  await addContact(contact);

  res.json({ contact, message: 'Success, contact added' });
};

const updateContactByIdController = async (req, res, next) => {
  const { contactId: id } = req.params;
  const updatedContactData = req.body;

  if (!updatedContactData) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const contact = await updateContactById(id, updatedContactData);

  if (!contact) {
    return res.status(404).json({ message: 'Not found' });
  }

  res.json({ contact, message: 'Success, contact updated' });
};

const updateStatusContactByIdController = async (req, res, next) => { 
  const { contactId: id } = req.params;
  const newStatus = req.body;
  
  const contact = await updateStatusContactById(id, newStatus);

  if (!contact) {
    return res.status(404).json({ message: "Not found" });
  }

  res.json({ contact, message: "Success, contact's status updated" });
}

const removeContactByIdController = async (req, res, next) => {
  const { contactId: id } = req.params;

  const contact = await removeContactById(id);
  if (!contact) {
    return res.status(404).json({ message: `Not found` });
  }
  res.json({ contact, message: "contact deleted" });
};

module.exports = {
  getContactsController,
  getContactByIdController,
  addContactController,
  updateContactByIdController,
  updateStatusContactByIdController,
  removeContactByIdController,
};