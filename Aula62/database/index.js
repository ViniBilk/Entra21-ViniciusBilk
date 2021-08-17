require("dotenv").config()
const { Sequelize } = require('sequelize');
const dbConfig = require("../config/database");

const Usuario = require("../models/Usuario")
const Projeto = require("../models/Projeto")
const Endereco = require("../models/Endereco")

const sequelize = new Sequelize(dbConfig);

//Iniciando os Models
Usuario.init(sequelize);
Projeto.init(sequelize);
Endereco.init(sequelize);

//Definindo as associações para models
Usuario.associate(sequelize.models);
Projeto.associate(sequelize.models);
Endereco.associate(sequelize.models);

module.exports = sequelize;

//Testando Conexão
// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Conexão bem-sucedida');
//     } catch (error) {
//         console.error('Conexão Falhou', error);
//     } finally {
//         sequelize.close();
//     }
// })()

