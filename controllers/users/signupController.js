const { signup } = require("../../services/users");

const singupController = async (req, res) => {
  const { email, password, ...data } = req.body;

  const result = await signup(email, password, data);

  if (result === 11000) {
    return res.status(409).json({
      message: "Email in use",
    });
  }

  res.status(201).json({
    user: {
      email,
      subscription: "starter",
    },
  });
};

module.exports = {
  singupController,
};
