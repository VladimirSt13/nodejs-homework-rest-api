const { getContacts } = require("../../services/contacts");

const getContactsController = async (req, res, next) => {
  const { _id: owner } = req.user;

  const contacts = await getContacts(owner);

  if (!contacts) {
    return res.status(400).json({ message: "fail, something wrong" });
  }

  res.json({ contacts, message: "success" });
};

module.exports = { getContactsController };
