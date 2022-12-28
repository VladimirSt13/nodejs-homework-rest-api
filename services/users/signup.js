const { error } = require("../../helpers/error");
const { User } = require("../../models/userModel");

const signup = async (email, password, data) => {
  try {
    const user = new User({
      email,
      password,
      ...data,
    });

    await user.save();

    return user;
  } catch (err) {
    if (err.code === 11000) {
      throw error(409, `Email in use, code:${err.code}`);
    }
    throw error(409, err.code);
  }
};

module.exports = { signup };
