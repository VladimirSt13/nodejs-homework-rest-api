const express = require('express')
const { listContacts, getContactById } = require('../../models/contacts')

const router = express.Router()

router.get('/', async (req, res, next) => {
  const contacts = await listContacts()
  res.json({ contacts, message: 'success' })
})

router.get('/:contactId', async (req, res, next) => {
  const {id} = req.params
  const contact = await getContactById(id)
  if (!contact) {
    return res.status(400).json({ message: `failure, no contact with ${id} found` });
  }
  res.json({ contact, message: 'success' })
})

router.post('/', async (req, res, next) => {
  const { name, email, phone } = req.params;
  
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
