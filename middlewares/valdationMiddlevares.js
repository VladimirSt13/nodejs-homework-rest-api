const {
  addContactSchema,
  updateContactSchema }
= require("../schemas/schemas");

const addContactValidation = (res,req, next) => {
  
  const validationResult = addContactSchema.validate(req.body);

  if (validationResult.error) {
    return res.status(400).json({ status: validationResult.error.details });
  }

  next();
}

const updateContactValidation = (res, req, next) => {
    const validationResult = updateContactSchema.validate(req.body);

  if (validationResult.error) {
    return res.status(400).json({ status: validationResult.error.details });
  }

  next();
}

module.exports = {
  addContactValidation,
  updateContactValidation,
};
