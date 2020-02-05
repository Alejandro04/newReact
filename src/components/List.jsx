import React, { Component } from 'react'

export default class List extends Component {

    // CURRYNG - PATRÓN DE PROGRAMACIÓN FUNCIONAL
    // ES UNA FUNCIÓN QUE CONSTRUYE OTRA FUNCIÓN POR MEDIO DE LOS ARGUMENTOS QUE SE LE PASEN
    // const suma = a => b => a + b
    // const suma1 = suma(1)
    // imprime suma1 = b => a + b
    // suma1(5)
    // imprime: 6

    // ALTERNATIVA 1
    handleClick = id => e => {
        // PASAR EL ID AL COMPONENTE PADRE: APP
        const { handleClick } = this.props 
        handleClick(id)
    }

    render() {
        const { data } = this.props
        return (
            <ul>
                {data.map(x => <li key={x.id}> {x.name} <button onClick={this.handleClick(x.id)}>update</button></li>)}
            </ul>
        )
    }


    // ALTERNATIVA 2
    // CREAR UN ELEMENTO HTML EN EL BUTTON Y SACAR EL ID MEDIANTE TARGET
    /*
    handleClick = e => {
        console.log(e.target.getAttribute('data-id'))
    }

    render() {
        const { data } = this.props
        return (
            <ul>
                {data.map(x => <li key={x.id}> {x.name} <button data-id={x.id} onClick={this.handleClick}>update</button></li>)}
            </ul>
        )
    }
    */
}