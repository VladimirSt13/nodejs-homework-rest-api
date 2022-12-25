const { addContact } = require("../../services/contacts");

const addContactController = async (req, res, next) => {
  const contact = req.body;

  if (!contact) {
    return res.status(400).json({ message: "Missing fields" });
  }

  await addContact(contact);

  res.json({ contact, message: "Success, contact added" });
};

module.exports = { addContactController };
