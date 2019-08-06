import React from 'react'
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
        // create usr card
        const usrCard = createCard(results.data)
        cards.appendChild(usrCard)
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
