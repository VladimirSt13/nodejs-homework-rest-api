const express = require("express");
const usersRouter = express.Router();
const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  singupController,
  loginController,
  logoutController,
} = require("../../controllers/users");
const {
  userValidation,
  authValidation,
} = require("../../middlewares/validations/users");

usersRouter.post("/signup", userValidation, asyncWrapper(singupController));
usersRouter.post("/login", userValidation, asyncWrapper(loginController));

usersRouter.use(authValidation);

usersRouter.post("/users/current", asyncWrapper(userCurrenController));
usersRouter.post("/logout", asyncWrapper(logoutController));

module.exports = {usersRouter};
