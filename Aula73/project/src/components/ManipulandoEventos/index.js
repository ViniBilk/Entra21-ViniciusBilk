import { PrimeiroComponente } from "../PrimeiroComponente";

export function ManipulandoEventos() {
    function handleClick() {
        alert("Caraca Você Clicka Bem D+")
    }

    function handleMouseOver() {
        console.log("Você entrou no botão")
    }

    function handleMouseLeave() {
        console.log("Mouse saiu do botão")
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("Deu boas")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"></input>
                <button
                    onClick={handleClick}
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                >Click!</button>
            </form>
        </>
    )
}