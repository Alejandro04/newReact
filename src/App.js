import React, { Component } from 'react'
import './App.css'
import ViewList from './components/ViewList'
import UserForm from './components/UserForm'

import axios from 'axios'

class App extends Component {

  state = {
    data: [],
    route: 'list' // or form
  }

  constructor() {
    super()

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({ data: response.data })
      })
      .catch(error => {
        console.log(error);
      })
  }

  selectUser = id => {
    console.log(id)
    this.setState({
      route: 'form',
      userSelected: id
    })
  }

  newUser = () => {
    this.setState({
      route: 'form'
    })
  }


  addUser = users => {
    axios.post('https://jsonplaceholder.typicode.com/users', users)
    .then(({ data }) => {
      const newData = this.state.data.concat(data)
      this.setState({
        data: newData,
        route: 'list'
      })
    })
  }

  render() {
    const { route, data } = this.state

    return (
      <div className="App">
        {route === 'list' && <ViewList newUser={this.newUser} handleClick={this.selectUser} data={data} />}
        {route === 'form' && <UserForm handleSubmit={this.addUser} />}
      </div>
    );
  }
}

export default App;
