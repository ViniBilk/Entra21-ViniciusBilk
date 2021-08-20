const express = require("express")
const router = express.Router();

//Importando Controllers
const usuariosControllers = require("../controllers/usuariosControllers")

//Importando validations
const usuarioValidations = require("../validations/usuariosValidations")

//GET usuarios

router.get("/", usuariosControllers.getAll);

//GET usuario

router.get("/:id" , usuarioValidations.get, usuariosControllers.getOne);

//POST usuarios

router.post("/", usuarioValidations.post, usuariosControllers.create);

//DELETE usuario

router.delete("/:id" , usuarioValidations.delete, usuariosControllers.remove);

module.exports = router;

//PUT usuario

router.put("/:id" , usuarioValidations.put, usuariosControllers.update);

