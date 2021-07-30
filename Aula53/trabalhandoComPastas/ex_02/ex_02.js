// 2) Crie uma função moveFiles(oldFolderPath, newFolderPath) que move os arquivos da pasta original
// para a nova pasta.
const fs = require("fs");
const fsPromises = require("fs/promises");
const { get } = require("http");
const path = require("path");

async function getArchives(oldFolderPath){
        const nomePasta = oldFolderPath;
        const files = await fsPromises.readdir(nomePasta);
        return files
}

async function moveFiles(oldFolderPath, newFolderPath){
    let files = await getArchives(oldFolderPath)
    files.forEach( async (file) => {
        try {
            await fsPromises.rename(path.resolve(oldFolderPath,file),path.resolve(newFolderPath,file))
        } catch (err) {
            console.log(err.message);
        }    
    })  
}

moveFiles(`${path.resolve(__dirname, "pasta2")}`,`${path.resolve(__dirname,"pasta1")}`)