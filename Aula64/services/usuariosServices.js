const { Usuario } = require("../db/models")

async function getUsuarios(id){
    const usuario = await Usuario.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!usuario) {
        return res.status(404).json({ message: "Usuário não foi encontrado!" });
    };

    res.json(usuario);
};

async function getUsuario(id){
    const usuarios = await Usuario.findAll();

    res.json(usuarios);
};

async function createUsuario(usuario){

};

async function removeUsuario(id){

};

async function updateUsuario(usuarioAtualizado){

};

module.exports = {
    getUsuario,
    getUsuarios,
    createUsuario,
    removeUsuario,
    updateUsuario	
}

