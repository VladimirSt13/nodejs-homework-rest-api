const { addContact } = require("../../services/contacts");

const addContactController = async (req, res) => {
  const contact = req.body;
  const { _id: owner } = req.user;
  
  if (!contact) {
    return res.status(400).json({ message: "Missing fields" });
  }

  await addContact(contact, owner);

  res.json({ contact, message: "Success, contact added" });
};

module.exports = { addContactController };
