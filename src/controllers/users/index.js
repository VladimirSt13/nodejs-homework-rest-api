const { singupController } = require("./signupController");
const { loginController } = require("./loginController");
const { currentController } = require("./currentController");
const {
  updateSubscriptionController,
} = require("./updateSubscriptionController");
const { logoutController } = require("./logoutController");
const { uploadAvatarController } = require("./uploadAvatarController");

module.exports = {
  singupController,
  loginController,
  currentController,
  logoutController,
  updateSubscriptionController,
  uploadAvatarController,
};
