const express = require("express");
const testRouter = express.Router();
const { testGETController, testPost } = require("../controller/testController");

testRouter.route("/:id").get(testGETController).post(testPost);

module.exports = testRouter;
