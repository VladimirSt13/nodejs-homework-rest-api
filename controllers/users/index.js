const { currentController } = require("./currentController");
const { loginController } = require("./loginController");
const { logoutController } = require("./logoutController");
const { singupController } = require("./signupController");

module.exports = {
  singupController,
  loginController,
  currentController,
  logoutController,
};
