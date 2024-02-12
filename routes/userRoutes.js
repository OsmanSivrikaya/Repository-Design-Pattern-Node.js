const express = require("express");
const authenticateJWT = require("../midlewares/authMidleware");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/getData", authenticateJWT, userController.getData);

module.exports = router;
