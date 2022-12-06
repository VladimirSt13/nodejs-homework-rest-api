const express = require('express')
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require('../../models/contacts');

const router = express.Router()

router.get('/', async (req, res, next) => {
  const contacts = await listContacts()
  if (!contacts) {
    return res.status(400).json({ message: `fail, something wrong` });
  }
  res.json({ contacts, message: 'success' })
})

router.get('/:contactId', async (req, res, next) => {
  const { contactId: id } = req.params;
  const contact = await getContactById(id);
  if (!contact) {
    return res.status(400).json({ message: `fail, contact with id=${id} not found` });
  }
  res.json({ contact, message: 'success' })
})

router.post('/', async (req, res, next) => {
  const { name, email, phone } = req.body;
  const contact = await addContact({ name, email, phone });
  
  if (!contact) {
    return res.status(400).json({ message: `fail, contact with id=${id} not added` });
  }

  res.json({ contact, message: `success, contact added` })
})

router.delete('/:contactId', async (req, res, next) => {
  const { contactId: id } = req.params;

  const contact = await removeContact(id);
  if (!contact) {
    return res.status(400).json({ message: `fail, no contact with id=${id} found` });
  }
  res.json({ contact, message: 'success, contact deleted' })
})

router.put('/:contactId', async (req, res, next) => {
  const { contactId: id } = req.params;
  const { name, email, phone } = req.body;

  const contact = await updateContact(id, { name, email, phone });

  if (!contact) {
    return res.status(400).json({ message: `failed, contact with id=${id} not found` });
  }

  res.json({ contact, message: `success, contact with id=${id} updated` });
})

module.exports = router
