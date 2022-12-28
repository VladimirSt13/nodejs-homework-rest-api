const express = require("express");
const usersRouter = express.Router();
const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  singupController,
  loginController,
  logoutController,
  currentController,
} = require("../../controllers/users");
const {
  userValidation,
  authValidation,
} = require("../../middlewares/validations/users");

usersRouter.post("/signup", userValidation, asyncWrapper(singupController));
usersRouter.post("/login", userValidation, asyncWrapper(loginController));

usersRouter.get("/current", authValidation, asyncWrapper(currentController));
usersRouter.post("/logout", authValidation, asyncWrapper(logoutController));

module.exports = { usersRouter };
