// 3) Faça um script que leia o arquivo exercioNomes.txt e utilize a biblioteca chalk (https://www.npmjs.com/package/chalk) para
// mostrar os nomes que começam com a letra A em vermelho, os nomes que começam com a letra C em azul e os
// nomes que começam com a letra D em magenta.
const chalk = require('chalk')
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
                console.log(chalk.red(nome))
            }else if(nome1[0] == "C"){
                console.log(chalk.blue(nome))
            }else if(nome1[0] == "D"){
                console.log(chalk.magenta(nome))
            }else{
                console.log(nome)
            }
        })
    } catch (err) {
        console.log(err.message);
    }
})();
