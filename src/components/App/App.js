import React, { Component } from 'react'
import Songs from '../Songs/Songs'
import songsData from '../../testData/songsData';
import'./App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      songs: songsData,
      errorMessage: ""
    }
  }

  render() {
    return (
      <main className='App'>
        <h1>Beats4Devs</h1>
        <Songs songs={this.state.songs} />
      </main>
    )
  }
}

export default App;
