import React, { Component } from 'react'

export default class UserForm extends Component {

    state = {}

    // Object Destructuring
    handleChange = ({ target }) =>{
        //console.log(target.name, target.value)

        this.setState({
            [target.name]: target.value
        })
    }

    render() {
        console.log(this.state)
        return (
            <form>
                <input name="name" onChange={this.handleChange} />
                <input name="email" onChange={this.handleChange} />
                <input name="website" onChange={this.handleChange} />
            </form>
        )
    }
}