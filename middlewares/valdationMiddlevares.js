const {
  addContactSchema,
  updateContactSchema,
  updateStatusContactSchema
} = require("../schemas/schemas");

const addContactValidation = (req, res, next) => {
  
  const validationResult = addContactSchema.validate(req.body);

  if (validationResult.error) {
    return res.status(400).json({ status: validationResult.error.details });
  }

  next();
}

const updateContactValidation = (req, res, next) => {
  const validationResult = updateContactSchema.validate(req.body);

  if (validationResult.error) {
    return res.status(400).json({ status: validationResult.error.details });
  }

  next();
};

const updateStatusContactValidation = (req, res, next) => {
  const validationResult = updateStatusContactSchema.validate(req.body);

  if (validationResult.error) {
    return res.status(500).json({ message: "missing field favorite" });
  }

  next();
};

module.exports = {
  addContactValidation,
  updateContactValidation,
  updateStatusContactValidation,
};
