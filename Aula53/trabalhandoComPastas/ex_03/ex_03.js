// 3) Crie uma função moveEspecificFiles(oldFolderPath, newFolderPath, extension) que move os arquivos
// com a extensão informada para a nova pasta.

const fs = require("fs");
const fsPromises = require("fs/promises");
const { get } = require("http");
const path = require("path");
const FileType = require('file-type');


async function getArchives(oldFolderPath){
        const nomePasta = oldFolderPath;
        const files = await fsPromises.readdir(nomePasta);
        return files
}

async function moveEspecificFiles(oldFolderPath, newFolderPath,extension){
    let files = await getArchives(oldFolderPath)
    files.forEach( async (file) => {
        try {
            if(FileType.fromFile(path.resolve(oldFolderPath,file)) == extension){
                await fsPromises.rename(path.resolve(oldFolderPath,file),path.resolve(newFolderPath,file))
            }
        } catch (err) {
            console.log(err.message);
        }    
    })  
}
moveEspecificFiles(`${path.resolve(__dirname, "pasta1")}`,`${path.resolve(__dirname,"pasta2")}`,"txt")