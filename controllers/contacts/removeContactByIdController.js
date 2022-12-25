const { removeContactById } = require("../../services/contacts");

const removeContactByIdController = async (req, res, next) => {
  const { contactId: id } = req.params;

  const contact = await removeContactById(id);
  if (!contact) {
    return res.status(404).json({ message: `Not found` });
  }
  res.json({ contact, message: "contact deleted" });
};

module.exports = { removeContactByIdController };
