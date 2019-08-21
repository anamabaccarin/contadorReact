import React from "react";

import '../assets/css/Contador.css';

export default class Contador extends React.Component{
    constructor(){
        super()
        this.state = {
            contador: 0,
        }
    }

    somar(){
        this.setState({
            contador:this.state.contador + 1
        })
    }

    subtrair(){
        this.setState({
            contador:this.state.contador - 1
        })
    }

    render(){
        return (
            <div className="contador">
                <h1>{this.state.contador} </h1>
                <div> 
                    <button onClick={this.somar.bind(this)}>Somar</button>
                    <button onClick={this.subtrair.bind(this)}>Subtrair</button>
                </div>
            </div>
            )
    }
}

