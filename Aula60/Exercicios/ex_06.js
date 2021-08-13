// 4) Crie uma função insereClientes(clientes) que recebe um vetor de clientes
// e insere esses clientes no banco de dados.
// (Deve inserir o registro na tabela clientes e na tabela enderecos).

const db = require("../db")
const format = require("pg-format");

let livros = [ 
    {
        nome_autor: "Valdinei Cordeiro",
        assunto: "Pescndo com waldy",
        preco: "68",
        quantidade_estoque: "4",
        id_editora: "00d3b8a1-0118-4280-9b03-706c32fa961a"
    },
    {

        nome_autor: "Sergio De Sousa",
        assunto: "Como caçar dinossauros",
        preco: "24",
        quantidade_estoque: "10",
        id_editora: "89d170d3-d4f5-4a2e-8179-ccb0789b997d"
    },
    {

        nome_autor: "Monica Batista",
        assunto: "Planos Infaliveis by Cebolinha",
        preco: "15",
        quantidade_estoque: "30",
        id_editora: "ee2cd2c7-0ee8-4d21-851b-02d0a0f113cb"

    }
]

async function insereLivros(livros){
    let livrosVetor = []

    for(let livro of  livros){
        livrosVetor.push([
            livro.nome_autor,
            livro.assunto,
            livro.preco,
            livro.quantidade_estoque,
            livro.id_editora
        ])
    }

    let query = format("INSERT INTO livros (nome_autor, assunto, preco, quantidade_estoque, id_editora) VALUES %L RETURNING *", livrosVetor);

    const {rows} = await db.query(query);
}

(async  () => {
    try {
        await insereLivros(livros)
        console.log("Livros inseridos com sucesso.");  
    } catch (err) {
        console.log(err.message)
    } finally {
        db.end()
    }
})();



