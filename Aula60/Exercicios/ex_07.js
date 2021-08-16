// 7) Crie uma função obtemLivros(livros) que recebe como parâmetro um vetor com
// identificadores de livros. Essa função deve retornar um vetor com todos os 
// livros presentes no parâmetro.

const db = require("../db")
const format = require("pg-format");

let livros = ["27eb6004-eaa1-4d9c-b1d8-9ea3880c2adc","c73939de-033a-49a6-8adf-0a51031d4597","e1bcbe9b-9316-4e7e-aff3-67b35fd97877"]

async function obtemLivros(livros){

    livros.forEach( async (livro) => {
        console.log(livro)
        let query = `SELECT * FROM livros WHERE isbn = $1;`

        try {
            let {rows} = await db.query(query,[livro]);
            console.log(rows)
        } catch (err) {
            console.log(err)
        }
        
    })
    
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