const express = require('express');
const {
  getContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require('../../controllers/contactsController');
const {
  updateContactValidation,
  addContactValidation,
} = require('../../middlewares/valdationMiddlevares');


const router = express.Router()

router.get('/', getContacts)
router.get('/:contactId', getContactById);
router.post('/', addContactValidation, addContact);
router.delete('/:contactId',updateContactValidation, removeContact);
router.put('/:contactId', updateContact);

module.exports = router
