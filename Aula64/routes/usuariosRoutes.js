const express = require("express")
const router = express.Router();

//PUT usuario

router.put("/:id", async (req, res) => {

    try {
        const usuario = await Usuario.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!usuario) {
            return res.status(404).json({ message: "Usuário não foi encontrado!" });
        }

        const usuarioAtualizado = req.body;

        Object.assign(usuario, usuarioAtualizado);

        await usuario.save();

        res.json(usuario)

    } catch (error) {
        res.status(400).json({ message: "Ocorreu um Erro" });
    }
});

//GET usuario

router.get("/:id", async (req, res) => {

    try {
       
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Ocorreu um Erro" });
    }
});

//GET usuarios

router.get("/", async (req, res) => {

    try {
       
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Ocorreu um Erro" });
    }
});

//POST usuarios

router.post("/", async (req, res) => {


    //Validar se o usuário ja existe atrav´s do e-mail

    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        console.log(err.message);
        res.status(400).json({ message: "Ocorreu um Erro" });
    }
});

//DELETE usuario

router.delete("/:id", async (req, res) => {

    try {
        const usuario = await Usuario.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!usuario) {
            return res.status(404).json({ message: "Usuário não foi encontrado!" });
        }

        await usuario.destroy();

        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: "Ocorreu um Erro" });
    }
});

module.exports = router;