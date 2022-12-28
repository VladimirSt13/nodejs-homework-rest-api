const { getContacts } = require("../../services/contacts");

const getContactsController = async (req, res, next) => {
  const { _id: owner } = req.user;

  const contacts = await getContacts(owner);

  res.status(200).json({ contacts, message: "success" });
};

module.exports = { getContactsController };
