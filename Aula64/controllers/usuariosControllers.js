const usuariosServices = require("../services/usuariosServices")

async function getAll(req, res, next){
    try {
        const usuarios = await usuariosServices.getUsuarios();

        res.json(usuarios)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function getOne(){
    try {
        const usuarios = await usuariosServices.getUsuarios();

        res.json(usuarios)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function create(){
    try {
        const usuarios = await usuariosServices.getUsuarios();

        res.json(usuarios)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function update(){
    try {
        const usuarios = await usuariosServices.getUsuarios();

        res.json(usuarios)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function remove(){
    try {
        const usuarios = await usuariosServices.getUsuarios();

        res.json(usuarios)
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