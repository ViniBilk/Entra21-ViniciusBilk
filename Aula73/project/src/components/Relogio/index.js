import React from "react";

export class Relogio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            horario: new Date().toLocaleTimeString('pt-br')
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                horario: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    componentDidUpdate(){
        console.log("Atualizou")
    };

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    // shouldComponentUpdate(){
    //     if(this.state.horario.getSeconds() % 2 == 0){
    //         return  true
    //     }

    //     return false
    // }

    render() {
        return <p>{this.state.horario}</p>
    }
}