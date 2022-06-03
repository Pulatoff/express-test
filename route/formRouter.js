const express = require("express");
const formRouter = express.Router();
const {
  formController,
  getFormController,
} = require("../controller/formController");

formRouter.route("/").post(formController).get(getFormController);

module.exports = formRouter;
