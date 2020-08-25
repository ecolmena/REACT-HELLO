import React, { Component } from 'react';

export class  Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    };

// en el constructor, estamos inicializando el state, por eso es que si 
// onstruimos los componentes que definen el ciclo de vida
// el reloj para poder lograr la actualizacion 

// este componente permite crear el mecanismo que permite, mantener vivo
// el proceso de mostrar la actualizacion del reloj

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),1000
        );
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
        <div>
            <h1>Hello, World!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }

}
 