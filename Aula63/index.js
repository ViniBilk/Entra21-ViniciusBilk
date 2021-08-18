const { sequelize, Usuario } = require('./db/models');

(async () => {
    try {
        await sequelize.sync({ force: true })

        await sequelize.authenticate();
        console.log("Conexão Bem-Sucedida")

        //Inserindo Ususario

        const pedro = await Usuario.create({
            nome: "Pedro",
            email: "pedro@email.com",
            senha: "123456"
        });

        console.log("Usuário Criado com Sucesso")

        //Inserindo endereco 
        
        await pedro.createEndereco({
            rua: "Rua 01",
            numero: 123,
        })

        console.log("Endereço criado com sucesso!")

        //Inserindo Projeto

        await pedro.createProjeto({
            nome: "Projeto 1",
            quantidade_horas: 10
        });

        console.log("Projeto criado com sucesso!")

    } catch (error) {
        console.log("Erro", error)
    } finally {
        sequelize.close();
    }
})();



