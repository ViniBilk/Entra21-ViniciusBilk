// 5) Crie uma função insereEditoras(editoras) que recebe um vetor de editoras:
// editora = {
//     nome_gerente,
//     telefone
// }
// e insere essas editoras no banco de dados.

// Utilize essa função para criar 5 editoras.

const db = require("../db")
const format = require("pg-format");

let editoras = [
    {
        nome_gerente: "Waldir",
        telefone: "40028922"
    },
    {
        nome_gerente: "Robson",
        telefone: "190"
    },
    {
        nome_gerente:"Sabrina",
        telefone: "98773221"
    }
]

async function insereEditoras(editoras) {
    let editorasVetor = []

for(let editora of  editoras){
    
    editorasVetor.push([
        editora.nome_gerente,
        editora.telefone
    ])
}

let query = format("INSERT INTO editoras (nome_gerente, telefone) VALUES %L RETURNING id", editorasVetor);

const {rows} = await db.query(query);

}

(async () => {
    try {
        await insereEditoras(editoras);
        console.log("Editora botada com sucesso.");        
    } catch (err) {
        console.log(err.message);
    } finally {
        db.end();
    }
})();