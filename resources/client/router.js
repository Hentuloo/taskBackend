const express = require("express");
const router = express.Router();
const { addUser, getAllUsers } = require("./controller");

router
  .route("/")
  .get(getAllUsers)
  .post(addUser);

module.exports = router;
