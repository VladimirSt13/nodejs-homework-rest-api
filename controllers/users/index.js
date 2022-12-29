const { singupController } = require("./signupController");
const { loginController } = require("./loginController");
const { currentController } = require("./currentController");
const {
  updateSubscriptionController,
} = require("./updateSubscriptionController");
const { logoutController } = require("./logoutController");


module.exports = {
  singupController,
  loginController,
  currentController,
  logoutController,
  updateSubscriptionController,
};
