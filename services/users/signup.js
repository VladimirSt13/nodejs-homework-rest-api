const { User } = require("../../models/userModel");

const signup = async (email, password) => {
  try {
    const user = new User({
      email,
      password,
    });

    await user.save();
    
  } catch (error) {
    return error.code;
  }
};

module.exports = { signup };
