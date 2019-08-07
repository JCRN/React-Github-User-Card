import React from 'react'
import axios from 'axios'

import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard'

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
    this.getFollowers()
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

  getFollowers() {
    axios
      .get(`https://api.github.com/users/${this.state.user}/followers`)
      .then(results => {
        this.setState({ followers: results.data })
      })
      .catch(error => {
        alert('OOPS! Something Went Wrong :', error)
      })
  }

  render() {
    console.log('user state: ', this.state.userData)
    console.log('followers: ', this.state.followers)

    return (
      <div className="App">
        <h1>GITHUB USER</h1>
        <UserCard user={this.state.userData} followers={this.state.followers} />
        {this.state.followers.map(follower => {
          return (
            <FollowerCard
              key={follower.id}
              follower={follower}
              user={this.state.user}
              handleClick={this.handleClick}
            />
          )
        })}
      </div>
    )
  }
}

export default App
