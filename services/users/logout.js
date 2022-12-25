const { error } = require("../../helpers/error");
const { User } = require("../../models");

const logout = async (_id) => {
  console.log("logoutController");
  const result = await User.findByIdAndUpdate(_id, { token: null });
  console.log(result);
  if (!result) {
    throw error(401, "Not authorized");
  }
};

module.exports = {
  logout,
};
