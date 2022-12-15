const { getContactById } = require("../../models/contacts");

const getContactByIdController = async (req, res, next) => {
  const { contactId: id } = req.params;
  const contact = await getContactById(id);

  if (!contact) {
    return res.status(404).json({ message: `Not found` });
  }

  res.json({ contact, message: "success" });
};

module.exports = { getContactByIdController };
