import React from 'react'
import axios from 'axios'

import UserCard from './components/UserCard'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: 'jcrn',
      userData: [],
      followers: []
    }
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then(results => {
        this.setState({ userData: results.data })
      })
      .catch(error => {
        alert('OOPS! Something Went Wrong :', error)
      })
  }

  render() {
    console.log('user state: ', this.state.userData)
    return (
      <div className="App">
        <UserCard user={this.state.userData} />
      </div>
    )
  }
}

export default App
