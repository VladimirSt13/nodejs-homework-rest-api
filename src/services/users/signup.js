const { error } = require("../../helpers/error");
const { User } = require("../../models/userModel");
const gravatar = require("gravatar");

const signup = async (email, password, data) => {
  const avatarURL = gravatar.url(email, { s: "200" });

  try {
    const user = new User({
      email,
      password,
      avatarURL,
      ...data,
    });

    await user.save();

    return user;
  } catch (err) {
    if (err.code === 11000) {
      throw error(409, `Email in use, code:${err.code}`);
    }
    throw error(409, err);
  }
};

module.exports = { signup };
