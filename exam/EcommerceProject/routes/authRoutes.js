const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");

// Pages

router.get("/register", authController.registerPage);

router.get("/login", authController.loginPage);

// Actions

router.post("/register", authController.registerUser);

router.post("/login", authController.loginUser);

// Logout

router.get("/logout", authController.logout);

module.exports = router;