const express = require("express");

const { contacts: ctrl } = require("../../contollers/");
const { controllerWrapper, validation } = require("../../middlewares/");
const { joiContactsSchema } = require("../../schemas");

const router = express.Router();

router.get("/", controllerWrapper(ctrl.getAll));

router.get("/:id", controllerWrapper(ctrl.getById));

router.post("/", validation(joiContactsSchema), controllerWrapper(ctrl.add));

router.delete("/:id", controllerWrapper(ctrl.removeById));

router.patch(
  "/:id",
  validation(joiContactsSchema),
  controllerWrapper(ctrl.patchById)
);

module.exports = router;
