import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: [],
      followers: []
    }
  }

  getData(user) {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then(results => {
        this.setState({ userData: results })
      })
      .catch(error => {
        alert('OOPS! Something Went Wrong :(', error)
      })
  }

  render() {
    console.log('user state: ', this.state)
    return (
      <div className="App">
        <h1>hello there!</h1>
      </div>
    )
  }
}

export default App
