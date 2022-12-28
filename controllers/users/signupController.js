const { signup } = require("../../services/users");

const singupController = async (req, res) => {
  const { email, password, ...data } = req.body;

  const user = await signup(email, password, data);

  console.log(user);
  res.status(201).json({
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = {
  singupController,
};
