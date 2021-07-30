// Exercício:

// 1. Crie um script que irá salvar as informações de memória a cada 5 segundos em um arquivo chamado log.txt

// As informações devem ser salvas no seguinte formato:
// {"total_memory":"xx MB", "free_memory":"xx MB", "usage":"xx %"}

// Onde:
//     * total_memory: Quantidade total de memória.
//     * free_memory: Quantidade de memória livre.
//     * usage: Porcentagem de uso da memória.

// 

const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const os = require("os");
const { EOL } = require("os");

(async () => {
    const novoConteudo =   EOL + 'total_memory: '+ Math.round(os.totalmem() / 1024 / 1024) + "MB" + "\t" + "free_memory: " + Math.round(os.freemem() / 1024 / 1024) + "MB" + "\t" + "\t" + "usage: " + Math.round((os.totalmem - os.freemem) * 100 / os.totalmem) + "%" ;
    try {
        setInterval(async () => {
            await fsPromises.appendFile(path.resolve(__dirname, "teste2.txt"), novoConteudo);
            console.log("Novo conteúdo adicionado (Promise)");
        },5000) 
    } catch(err) {
        console.log(err.message);
    }
})();