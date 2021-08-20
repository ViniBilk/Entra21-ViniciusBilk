const { Usuario } = require("../db/models")
const createError = require("http-errors");
const { where } = require("sequelize");

//Function to get all users

async function getUsuarios() {
    const usuarios = await Usuario.findAll();

    return usuarios;
};

//Function to get one user

async function getUsuario(id) {
    const usuario = await Usuario.findOne({
        where: {
            id
        }
    });

    if (!usuario) {
        throw new createError(404, "Usuário não encontrado");
    };

    return usuario;
};

//Function to create user

async function createUsuario(novoUsuario) {
    const [usuario, criadoAgora] = await Usuario.findOrCreate({
        where: { email: novoUsuario.email },
        defaults: novoUsuario
    });

    if (!criadoAgora) throw new createError(409, "Usuário já está cadastrado!");

    return usuario;
};

async function removeUsuario(id) {

    const usuario = await Usuario.findOne({
        where: {
            id
        }
    });

    if (!usuario) {
        throw new createError(404,"Usuário não foi encontrado!" );
    }

    await usuario.destroy();
};

async function updateUsuario(id,updatedUser){

            const usuario = await Usuario.findOne({
                where: {
                    id
                }
            });
    
            if (!usuario) {
                throw new createError(404,"Usuário não foi encontrado!" );
            }

            Object.assign(usuario, updatedUser);
    
            await usuario.save();
    
            return usuario
};

module.exports = {
    getUsuario,
    getUsuarios,
    createUsuario,
    removeUsuario,
    updateUsuario	
}

