const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/userControllers");

const authentication = require("../middleware/authentication");

router.get("/", authentication(["admin"]), usersControllers.getAll);
router.post("/", usersControllers.create);

module.exports = router;