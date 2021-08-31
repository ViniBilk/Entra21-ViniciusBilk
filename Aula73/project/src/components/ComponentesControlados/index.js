import React from "react";

export class ComponentesControlados extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            email: "",
            cpf: "",
            sexo: "",
            cidade: ""
        }
    }

    handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    render() {
        return (
            <form>
                <label>
                    Nome:
                    <br/>
                    <input
                        type="text"
                        name="nome"
                        onChange={this.handleChange}
                        value={this.state.nome}
                    />
                </label>
                <br />
                <label>
                    E-mail:
                    <br/>
                    <input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                </label>
                <br />
                <label>
                    CPF:
                    <br/>
                    <input
                        type="text"
                        name="cpf"
                        onChange={this.handleChange}
                        value={this.state.cpf}
                    />
                </label>
                <br/>
                <br/>
                <label>
                    <input type="radio" name="sexo" value="feminino" onClick={this.handleChange} /> Feminino
                </label>
                <label>
                    <input type="radio" name="sexo" value="masculino" onClick={this.handleChange} /> Masculino
                </label>
                <br/>
                <br/>
                <select value={this.state.cidade} name="cidade" onChange={this.handleChange}>
                    <option value="blumenau">Blumenau</option>
                    <option value="indaial">Indaial</option>
                    <option value="timbo">Timbó</option>
                </select>
                <br/>
                <br/>
                <button>Enviar</button>
            </form>
        );
    }
}