const express = require("express");
const router = express.Router();
const { addUser, getUser } = require("./controller");

router.get("/", getUser);
router.post("/", addUser);

module.exports = router;
