const { updateContactById } = require("../../services/contacts");

const updateContactByIdController = async (req, res, next) => {
  const { contactId: id } = req.params;
  const updatedContactData = req.body;

  if (!updatedContactData) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const contact = await updateContactById(id, updatedContactData);

  if (!contact) {
    return res.status(404).json({ message: "Not found" });
  }

  res.json({ contact, message: "Success, contact updated" });
};

module.exports = { updateContactByIdController };
