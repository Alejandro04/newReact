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
        this.setState({ errors: result })
        // Evaluar SI el form viene con errores
        if (!Object.keys(result).length) {
            const { handleSubmit } = this.props

            // Envío de form
            handleSubmit(withoutErrors)
            e.target.reset()
        }
    }

    render() {
        const { errors } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="Name" name="name" onChange={this.handleChange} />
                {errors.name && <p>{errors.name}</p>}
                <input placeholder="Email" name="email" onChange={this.handleChange} />
                {errors.email && <p>{errors.email}</p>}
                <input placeholder="Website" name="website" onChange={this.handleChange} />
                {errors.website && <p>{errors.website}</p>}
                <button type="submit">Save</button>
            </form>
        )
    }
}