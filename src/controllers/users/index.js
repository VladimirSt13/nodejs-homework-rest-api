const { signupController } = require("./signupController");
const { loginController } = require("./loginController");
const { currentController } = require("./currentController");
const {
  updateSubscriptionController,
} = require("./updateSubscriptionController");
const { logoutController } = require("./logoutController");
const { uploadAvatarController } = require("./uploadAvatarController");

module.exports = {
  signupController,
  loginController,
  currentController,
  logoutController,
  updateSubscriptionController,
  uploadAvatarController,
};
