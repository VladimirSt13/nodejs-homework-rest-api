const express = require("express");
const usersRouter = express.Router();
const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  signupController,
  loginController,
  logoutController,
  currentController,
  updateSubscriptionController,
  uploadAvatarController,
} = require("../../controllers/users");
const {
  userValidation,
  authValidation,
  subscriptionValidation,
} = require("../../middlewares/validations/users");
const { uploadMiddleware } = require("../../middlewares/uploadMiddleware");

usersRouter.post("/signup", userValidation, asyncWrapper(signupController));

usersRouter.post("/login", userValidation, asyncWrapper(loginController));

usersRouter.get("/current", authValidation, asyncWrapper(currentController));

usersRouter.patch(
  "/",
  authValidation,
  subscriptionValidation,
  asyncWrapper(updateSubscriptionController)
);

usersRouter.patch(
  "/avatars",
  authValidation,
  uploadMiddleware.single("avatar"),
  asyncWrapper(uploadAvatarController)
);

usersRouter.post("/logout", authValidation, asyncWrapper(logoutController));

module.exports = { usersRouter };
