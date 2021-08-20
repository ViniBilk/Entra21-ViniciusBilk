const usuariosServices = require("../services/usuariosServices")

//GET usuarios

async function getAll(req, res, next) {
    try {
        const usuarios = await usuariosServices.getUsuarios();

        res.json(usuarios)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

//GET usuario

async function getOne(req, res, next) {
    try {
        const usuarios = await usuariosServices.getUsuario(req.params.id);

        res.json(usuarios)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

//POST usuario

async function create(req, res, next) {
    try {
        const usuario = await usuariosServices.createUsuario(req.body);

        res.json(usuario)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

//PUT usuarios

async function update(req, res, next) {
    try {
        const usuario = await usuariosServices.updateUsuario(req.params.id, req.body);

        res.json(usuario);
    } catch (error) {
        console.log(error)
        next(error)
    }
}

//DELETE usuario

async function remove(req, res, next) {
    try {
        await usuariosServices.removeUsuario(req.params.id);

        res.status(204).end()
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}