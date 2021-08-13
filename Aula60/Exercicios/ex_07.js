// 7) Crie uma função obtemLivros(livros) que recebe como parâmetro um vetor com
// identificadores de livros. Essa função deve retornar um vetor com todos os 
// livros presentes no parâmetro.

const db = require("../db")
const format = require("pg-format");

livros = [ 

]

async function obtemLivros(livros){
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
        await obtemLivros(livros)
    } catch (err) {
        console.log(err.message)
    } finally {
        db.end()
    }
})();