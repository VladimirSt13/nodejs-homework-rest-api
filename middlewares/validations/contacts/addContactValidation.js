const { addContactSchema } = require("../../../schemas/contacts");

const addContactValidation = (req, res, next) => {
  const validationResult = addContactSchema.validate(req.body);

  if (validationResult.error) {
    return res.status(400).json({ status: validationResult.error.details });
  }

  next();
};

module.exports = { addContactValidation };
