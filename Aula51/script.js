
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

        addInfos(div,infos)
    }

    function addInfos(div,infos){
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        let p4 = document.createElement("p")
        let p5 = document.createElement("p")
        let nome = infos[0],
            id = infos[1],
            gender = infos[2],
            specie = infos[3],
            status = infos[4]

        p1.innerHTML = "Name: "+ nome
        p1.classList.add("name")
        div.append(p1);

        p2.innerHTML = "Id: "+ id
        p2.classList.add("info")
        div.append(p2);
       
        p3.innerHTML = "Gender: "+ gender
        p4.classList.add("info")
        div.append(p3);
        
        p4.innerHTML = "Specie: "+ specie
        p4.classList.add("info")
        div.append(p4);
        
        p5.innerHTML = "Status: "+ status
        p5.classList.add("info")
        div.append(p5);

        if(status == "Alive"){
            p5.style.color = "green"
        }else if(status == "unknown"){
            p5.style.color = "black"
        }else {
            p5.style.color = "red"
        }
        
    }

    getRickandMorty();