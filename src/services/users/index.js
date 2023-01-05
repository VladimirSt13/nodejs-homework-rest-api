const { signup } = require("./signup");
const { login } = require("./login");
const { current } = require("./current");
const { updateSubscription } = require("./updateSubscription");
const { logout } = require("./logout");
const { uploadAvatar } = require("./uploadAvatar");
module.exports = {
  signup,
  login,
  current,
  logout,
  updateSubscription,
  uploadAvatar,
};
