// 8) Crie uma função comprar(dados_compra) que recebe um objeto dados_compra
// dados_compra = {
//     id_cliente,
//     livros (vetor com os identificadores dos livros comprados pelo cliente),
//     data (data atual),
//     valor (calculado através do preço dos livros)
// }
// e insere um registro na tabela compras e atualiza os pontos daquele cliente:
// O cliente recebe um ponto a cada 10 reais gastos.

// Utilize Transactions nessa questão:
// https://www.postgresql.org/docs/13/tutorial-transactions.html
// https://node-postgres.com/features/transactions

const db = require("../db")
const format = require("pg-format");

let dados_compra = {
    id_cliente: "23112056-1332-4b19-b534-c3060db382df",
    livros: ["e22102d0-e79c-4a99-beaa-bf03f06debc8","c73939de-033a-49a6-8adf-0a51031d4597"],
    data: Date.now(),
    valor: 0
}

 async function comprar(dados_compra){
    let vendaVetor = []

    vendaVetor = Object.values(dados_compra)

    let query = `INSERT INTO `
 }

