import React, { Component } from 'react'


const validate = values => {
    const errors = {}

    if (!values.name) {
        errors.name = 'this field is required!'
    }
    if (!values.email) {
        errors.email = 'this field is required!'
    }
    if (!values.website) {
        errors.website = 'this field is required!'
    }

    return errors
}

export default class UserForm extends Component {

    state = {
        errors: {}
    }

    constructor(props){
        super(props)

        this.state = {
            ...this.state,
            ...props.initValues
        }
    }

    // Object Destructuring
    handleChange = ({ target }) => {
        //console.log(target.name, target.value)

        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        // Destructuring and Object Spread Operator
        const { errors, ...withoutErrors } = this.state
        const result = validate(withoutErrors)
        // Evaluar SI el form viene con errores
        if (!Object.keys(result).length) {
            const { handleSubmit, initValues, handleUpdate } = this.props
            if (initValues.id) {
                handleUpdate(initValues.id, withoutErrors)
            } else {
                // Envío de form
                handleSubmit(withoutErrors)
            }
        }else{
            this.setState({ errors: result })
        }
    }

    render() {
        const { errors } = this.state
        const { initValues } = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <input defaultValue={initValues.name} placeholder="Name" name="name" onChange={this.handleChange} />
                {errors.name && <p>{errors.name}</p>}
                <input defaultValue={initValues.email} placeholder="Email" name="email" onChange={this.handleChange} />
                {errors.email && <p>{errors.email}</p>}
                <input defaultValue={initValues.website} placeholder="Website" name="website" onChange={this.handleChange} />
                {errors.website && <p>{errors.website}</p>}
                <button type="submit">Save</button>
            </form>
        )
    }
}