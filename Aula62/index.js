const sequelize = require("./database");
const { Usuario, Endereco, Projeto } = sequelize.models;

(async () => {
    try {
        //Criando todas as tabelas
        await sequelize.sync({ force: true })
        console.log("Tabelas Criadas Com sucesso")

        //Inserindo um usuário
        const pedro = await Usuario.create({
            nome: "Pedro",
            email: "pedro@email.com",
            senha: "123456"
        });

        console.log(pedro.checarSenha("1234"))

        console.log("Usuário criado com sucesso");
        console.log(pedro.toJSON)

        //Criando um endereco
        await Endereco.create({
            rua: "Rua 01",
            numero: 123,
            id_usuario: pedro.id
        })

        //Criando a partir do objeto

        // await pedro.createEndereco({
        //     rua: "Rua 01",
        //     numero: 123
        // });

        console.log("Endereco criado com sucesso!")

        const projeto = await Projeto.create({
            nome: "Projeto Verão 2021",
            quantidadeHoras: 60
        })

        console.log("Projeto cirado com sucesso")

        //Singular 
        // await projeto.addUsuario(pedro)

        //Plural
        // await projeto.removeUsuarios(pedro)

        // const usuarios = await Usuario.findAll({
        //     attributes: ['createdAt']
        // // })

        // usuarios.forEach(usuario => {
        //     console.log(usuario.toJSON())
        // })

        // Criando a tabela Usuarios
        // await Usuario.sync({ force: true });
        // console.log("Tabela criada com sucesso!");

        //Modificar o registro
        // pedro.email = "pedrão@email.com"
        // await pedro.save()
        // console.log("Email atualizado com sucesso!")

        //Remover registros 
        // await pedro.destroy();
        // console.log("O maluco sumiu")

        // //Inserindo multiplos registros

        // const usuarios = await Usuario.bulkCreate([
        //     {
        //         nome: "Pedro",
        //         email: "pedro@email.com",
        //         senha: "123456"
        //     },
        //     {
        //         nome: "José",
        //         email: "josé@email.com",
        //         senha: "123456"
        //     },
        //     {
        //         nome: "Paulo",
        //         email: "paulo@email.com",
        //         senha: "123456"
        //     }
        // ])
        // console.log("Usuário inseridos com sucesso")
        // usuarios.forEach((usuario) => {
        //     console.log(usuario.toJSON())
        // })

        //Comparando senha

        // console.log(compareSync("12346", usuarios[0].toJSON().senha))

        //Selecionando Registros

        // const todosUsuarios = await Usuario.findAll({
        //     where: {
        //         nome: {
        //             [Op.iLike]: "p%"
        //         }
        //     }
        // });

        // todosUsuarios.forEach(usuario => {
        //     console.log(usuario.toJSON())
        // console.log(todosUsuarios);
        // })

        // //Selecionando apenas um registro

        // const paulo = await Usuario.findOne({
        //     where: {
        //         nome: "Paulo"
        //     }
        // })

        // console.log(paulo.toJSON())

        //Select by pk

        // const jose = await Usuario.findByPk("4f19fc31-5de5-4d18-9c86-3cd91b4ca55b")

        // console.log(jose.toJSON())

    } catch (err) {
        console.error("Ocorreu algum erro ao criar a tabela", err.message);
    } finally {
        sequelize.close();
    }
})();