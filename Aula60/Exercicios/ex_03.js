const db = require("../db")

let cliente = {
    nome: "Roberto",
    email: "Robertinreidelas@gmail.com",
    telefone: "99999",
    numero_documento: "5454",
    tipo_pessoa: "PF",
    rua: "R. Vladimir Putin",
    numero: "007",
    cidade: "Moscou",
    estado: "GO",
    cep: "89120000",
    pontos: "0"
}

async function insereCliente(cliente) {
    
    const clienteVetor = [
        cliente.nome, 
        cliente.email, 
        cliente.telefone, 
        cliente.numero_documento, 
        cliente.tipo_pessoa,
        cliente.pontos
    ];

    const insertCliente =  `
        INSERT INTO clientes 
        (
            nome,
            email, 
            telefone, 
            numero_documento, 
            tipo_pessoa,
            pontos
           
        ) 

        VALUES 
        (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6

        )
        RETURNING id`;

    const {rows} = await db.query(insertCliente, clienteVetor);

    const endereco = [
        cliente.rua, 
        cliente.numero, 
        cliente.cidade, 
        cliente.estado, 
        cliente.cep, 
        rows[0].id
    ];
        
    const insereEndereco = `
        INSERT INTO enderecos
        ( 
            rua,
            numero, 
            cidade, 
            estado, 
            cep,
            id_cliente
        )

        VALUES 
        (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6

        )`;   

    await db.query(insereEndereco, endereco);
}

(async () => {
    try {
        await insereCliente(cliente);
        console.log("Cliente inserido com sucesso.");        
    } catch (err) {
        console.log(err.message);
    } finally {
        db.end();
    }
})();

