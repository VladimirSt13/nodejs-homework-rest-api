const { getContactById } = require("../../services/contacts");

const getContactByIdController = async (req, res, next) => {
  const { contactId: id } = req.params;
  const { _id: owner } = req.user;
  const contact = await getContactById(id, owner);

  if (!contact) {
    return res.status(404).json({ message: `Not found` });
  }

  res.json({ contact, message: "success" });
};

module.exports = { getContactByIdController };
