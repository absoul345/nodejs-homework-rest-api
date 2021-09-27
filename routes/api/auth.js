const express = require("express");

const {
  controllerWrapper,
  validation,
  authenticate,
} = require("../../middlewares");
const { joiUserSchema } = require("../../schemas");
const { auth: ctrl } = require("../../contollers");

const router = express.Router();

router.post(
  "/signup",
  validation(joiUserSchema),
  controllerWrapper(ctrl.register)
);

router.post("/login", validation(joiUserSchema), controllerWrapper(ctrl.login));

router.post("/logout", authenticate, controllerWrapper(ctrl.logout));

module.exports = router;