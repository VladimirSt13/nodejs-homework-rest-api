const { authValidation } = require("./authVlaidation");
const { userValidation } = require("./userValidation");
const { subscriptionValidation } = require("./subscriptionValidation");

module.exports = {
  userValidation,
  authValidation,
  subscriptionValidation,
};
