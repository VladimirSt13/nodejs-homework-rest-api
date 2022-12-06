const Joi = require("joi")

const addContactValidation = (res,req, next) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
  })

  const validationResult = schema.validate(req.body);

  if (validationResult.error) {
    return res.status(400).json({ status: validationResult.error.details });
  }

  next();
}

const updateContactValidation = (res, req, next) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).optional(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).optional(),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/).optional(),
  });

  const validationResult = schema.validate(req.body);

  if (validationResult.error) {
    return res.status(400).json({ status: validationResult.error.details });
  }

  next();
}

module.exports = {
  addContactValidation,
  updateContactValidation,
};
