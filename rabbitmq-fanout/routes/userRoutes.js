const express = require("express");
const router = express.Router();

const appcontroller = require("../controller/userController");
router.post("/sendlog", appcontroller.signup);

module.exports = router;