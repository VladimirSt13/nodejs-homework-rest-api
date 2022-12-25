const { logout } = require("../../services/users");

const logoutController = async (req, res) => {
  const { _id } = req.user;

  try {
    await logout(_id);

    res.status(204);
    console.log("010101");
  } catch ({ status, message }) {
    res.status(status).json(message);
  }
};

module.exports = {
  logoutController,
};
