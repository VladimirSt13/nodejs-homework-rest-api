const { login } = require("../../services/users");

const loginController = async (req, res) => {
  const { email, password, ...data } = req.body;

  try {
    const { token, subscription } = await login(email, password, data);

    res.status(200).json({
      token,
      user: {
        email,
        subscription,
      },
    });
  } catch ({ status, message }) {
    res.status(status).json(message);
  }
};

module.exports = {
  loginController,
};
