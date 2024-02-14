const express = require("express");
const authenticateJWT = require("../midlewares/authMidleware");
const userController = require("../controllers/userController");
const router = express.Router();

//create user
router.post("/", userController.createUser);

//get user
router.get("/{id}", authenticateJWT, userController.getUser);

module.exports = router;
