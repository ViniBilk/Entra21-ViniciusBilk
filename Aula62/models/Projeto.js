const { DataTypes, Model } = require("sequelize")
const sequelize = require("../database")

class Projeto extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            quantidadeHoras: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, { sequelize });
    }

    static associate(models) {
        //(n,n)
        this.belongsToMany(models.Usuario, {
            foreignKey: "id_projeto",
            through: "UsuariosProjeto",
            as: {
                singular: "usuario",
                plural: "usuarios"
            }
        });
    }
}

module.exports = Projeto;