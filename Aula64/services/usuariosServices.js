const { Usuario } = require("../db/models")
const createError = require("http-errors")

async function getUsuarios(){
    const usuarios = await Usuario.findAll();

    return usuarios;
};

async function getUsuario(id){
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

// async function createUsuario(usuario){

// };

// async function removeUsuario(id){

// };

// async function updateUsuario(usuarioAtualizado){

// };

module.exports = {
    getUsuario,
    getUsuarios,
    // createUsuario,
    // removeUsuario,
    // updateUsuario	
}

