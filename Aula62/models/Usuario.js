const { DataTypes, Sequelize, Model } = require("sequelize");
const { hashSync, compareSync } = require("bcrypt");

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                        msg: "E-mail inválido!"
                    }
                }
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false,
                set(value) {
                    this.setDataValue("senha", hashSync(value, 10));
                }
            }
        }, { sequelize });
    }

    static associate(models) {
        //(n,n)
        this.belongsToMany(models.Projeto, {
            foreignKey: "id_usuario",
            through: "UsuariosProjeto",
            as: {
                singular: "projeto",
                plural: "projetos"
            }
        });

        //(1,1)
        this.hasOne(models.Endereco, {
            foreignKey: {
                name: "id_usuario",
                allowNull: false
            }
        })
    }

    checarSenha(senha) {
        return compareSync(senha, this.senha);
    }
}

//Configurções de nome de tabela

// }, {
// tableName: "usuarios",
// underscored: true
// });

module.exports = Usuario;