const { DataTypes, Model } = require("sequelize")
const sequelize = require("../database")

class Endereco extends Model {
    static init(sequelize) {
        super.init({
            rua: {
                type: DataTypes.STRING,
                allowNull: false
            },
            numero: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    min: 1
                }
            }
        }, { sequelize });
    }

    static associate(models) {
        //(1,1)
        this.belongsTo(models.Usuario, {
            foreignKey: {
                name: "id_usuario",
                type: DataTypes.UUID,
                allowNull: false
            }
        });
    }
}

module.exports = Endereco;