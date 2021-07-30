// 1) Crie uma função obterArquivos(path) que receba como parâmetro o path de um diretório
// e retorne um vetor com todos os arquivos presentes naquele diretório.

// Obs.: Diretórios não devem ser incluídos.
const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");

function obterArquivos(path){   
    (async () => {
        const nomePasta = path    
        const files = await fsPromises.readdir(nomePasta);

        console.log(files);
    })();
}

obterArquivos(`${__dirname}/pastaTeste`)