'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projeto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Usuario, {
        through: "usuarios_projetos",
        foreignKey: "id_projeto",
        as: {
          singular: "usuario",
          plural: "usuarios"
        }
      })
    }
  };
  Projeto.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Projeto',
  });
  return Projeto;
};