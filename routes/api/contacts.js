const express = require("express");

const { contacts: ctrl } = require("../../contollers/");
const {
  controllerWrapper,
  validation,
  authenticate,
} = require("../../middlewares/");
const { joiContactsSchema } = require("../../schemas");

const router = express.Router();

router.get("/", authenticate, controllerWrapper(ctrl.getAll));

router.get("/:id", authenticate, controllerWrapper(ctrl.getById));

router.post(
  "/",
  authenticate,
  validation(joiContactsSchema),
  controllerWrapper(ctrl.add)
);

router.delete("/:id", authenticate, controllerWrapper(ctrl.removeById));

router.put(
  "/:id",
  authenticate,
  validation(joiContactsSchema),
  controllerWrapper(ctrl.updateById)
);

router.patch("/:id", authenticate, controllerWrapper(ctrl.patchFavoriteById));

module.exports = router;
