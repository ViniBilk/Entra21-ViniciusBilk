
    // "https://rickandmortyapi.com/api/character/1".split("/").pop()

        let numeroEpisodeo = document.getElementById("inputEpisode"),
        sub = document.getElementById("sub")

    let global = document.getElementById("global")

    var invalidChars = ["-","+","e",]

    numeroEpisodeo.addEventListener("keydown", (e) => {
        if(invalidChars.includes(e.key)){
            e.preventDefault()
        }
    })

    function limpaElemento(elemento) {    
        console.log(elemento);        
        while (elemento.children.length) {
            console.log(elemento.chlidren);
            elemento.firstElementChild.remove();
        }
    }

    sub.addEventListener("click", (event) =>{
        if(numeroEpisodeo.value > 41){
            return alert("Numero Inválido")
        }else{
            limpaElemento(global)
            getRickandMorty(numeroEpisodeo.value)
        }
    })

    async function getRickandMorty(episode) {
        let response = await fetch(`https://rickandmortyapi.com/api/episode/${episode}`, {
        });

        if (!response.ok) {
            return console.log("A requisição falhou!")
        }

        let body = await response.json();
        let characters = body.characters

        for(let i = 0;i < characters.length; i++){
            let response1 = await fetch(`${body.characters[i]}`, {
                });

            let body1 = await response1.json();
            let infos = [body1.name,body1.id,body1.gender,body1.species,body1.status]
            createRicandMorty(body1.image,infos)
        }
    }

    function createRicandMorty(url,infos) {
        let div = document.createElement("div")
        let img = document.createElement("img")

        div.classList.add("card")
        global.append(div)
        img.src = url;
        div.append(img);

        for(let info of infos){
            let p = document.createElement("p")
            p.classList.add("info")
            p.innerHTML = info
            div.append(p);
        }
    }

    getRickandMorty();