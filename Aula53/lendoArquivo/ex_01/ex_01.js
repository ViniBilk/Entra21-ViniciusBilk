// 1) Crie um script que leia o arquivo exercioNomes.txt e mostra todos os nomes que começam com a letra A
// presentes no arquivo.
const fs = require("fs");
const fsPromises = require("fs/promises");
const { EOL } = require("os");
const path = require("path");

(async () => {
    try {
        const data = await fsPromises.readFile(path.resolve(__dirname, "exercicioNomes.txt"))
        let nomesVetor = data.toString("utf-8")
        let nomes = nomesVetor.split(EOL)
        nomes.filter((nome) => {
            let nome1 = nome.split("")
            if(nome1[0] == "A"){
                return console.log(nome)
            }
        })
    } catch (err) {
        console.log(err.message);
    }
})();

