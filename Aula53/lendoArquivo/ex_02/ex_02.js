// 2) Crie uma função getUserByName(name) que retorne o usuário obtido através do arquivo "users.json". Caso o usuário
// não exista a função deve retornar undefined.

// Se o usuário existir mostrar as informações do usuário no seguinte formato:
// Usuário encontrado: 
// nome: [nome do usuário]
// idade: [idade do usuário]
// email: [email do usuário]

// Caso o usuário não existir mostrar a mensagem: "Usuário não foi encontrado."
const fs = require("fs");
const fsPromises = require("fs/promises");
const { EOL } = require("os");
const path = require("path");

async function getUserByName(name){    
    try {
        const data = await fsPromises.readFile(path.resolve(__dirname, "users.json"))
        let users = JSON.parse(data)
        const user = users.find(user => user.nome === name);
        
        return user;
    } catch (err) {
        console.log(err.message);
    }    
}

(async () => {
    const user = await getUserByName("João");

    if (user) {
        console.log(`nome: ${user.nome}\nidade: ${user.idade}\nemail: ${user.email}`);        
    } else {
        console.log("Usuário não foi encontrado!");
    }
})();
