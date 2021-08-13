// 4) Crie uma função insereClientes(clientes) que recebe um vetor de clientes
// e insere esses clientes no banco de dados.
// (Deve inserir o registro na tabela clientes e na tabela enderecos).

const db = require("../db")
const format = require("pg-format");

let clientes = [ 
    {
        nome: "Roberto",
        email: "Robertinreidelas@gmail.com",
        telefone: "99999",
        numero_documento: "5454",
        tipo_pessoa: "PF",
        rua: "R. Vladimir Putin",
        numero: "007",
        cidade: "Moscou",
        estado: "GO",
        cep: "89120",
        pontos: "0"
    },
    {
        nome: "Felipe Daniel Galvão",
        email: "felipedanielgalvao@almaquinas.com.br",
        telefone: "98434",
        numero_documento: "98843",
        tipo_pessoa: "PF",
        rua: "Rua Seis",
        numero: "397",
        cidade: "Maricá",
        estado: "RJ",
        cep: "24926",
        pontos: "0"
    },
    {
        nome: "Eliane Malu Araújo",
        email: "elianemaluaraujo_@htmail.com",
        telefone: "98374",
        numero_documento: "61302",
        tipo_pessoa: "PF",
        rua: "Quadra QR 55",
        numero: "910",
        cidade: "Planaltina",
        estado: "GO",
        cep: "73754",
        pontos: "0"
    }
]

async function insereClientes(clientes){
    let clientesVetor = [],
        enderecosVetor = []

    for(let cliente of  clientes){
        clientesVetor.push([
            cliente.nome,
            cliente.email,
            cliente.telefone,
            cliente.numero_documento,
            cliente.tipo_pessoa,
            cliente.pontos 
        ])
        enderecosVetor.push([
            cliente.rua,
            cliente.numero,
            cliente.cidade,
            cliente.estado,
            cliente.cep
        ])
    }

    let query = format("INSERT INTO clientes (nome, email, telefone,numero_documento,tipo_pessoa,pontos) VALUES %L RETURNING id", clientesVetor);

    const {rows} = await db.query(query);

    for(let i = 0;i < rows.length;i++){   
        enderecosVetor[i].push(rows[i].id)
    }

    query = format("INSERT INTO enderecos (rua, numero,cidade,estado,cep,id_cliente) VALUES %L RETURNING *", enderecosVetor);

    await db.query(query)
}

(async  () => {
    try {
        await insereClientes(clientes)
        console.log("Clientes inseridos com sucesso.");  
    } catch (err) {
        console.log(err.message)
    } finally {
        db.end()
    }
})();





