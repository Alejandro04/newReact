import React, { Component } from 'react'


const styles = {
   inline: {
       display: 'inline'
   }
}

export default class Header extends Component {
    render() {
        const { newUser } = this.props
        return (
            <header>
                <h2 style={styles.inline}>Users</h2>
                <button onClick={newUser} style={styles.inline}>new User</button>
            </header>
        )
    }
}