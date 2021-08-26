const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/authController");

router.post("/login/google", authControllers.goog);
router.post("/refresh", authControllers.refresh);
router.post("/login", authControllers.login)

module.exports = router;