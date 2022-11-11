import React, { Component } from 'react'
import Songs from '../Songs/Songs'
import songsData from '../../testData/songsData'
import { getSongsData } from '../../apiCalls'
import headphones from '../../assets/headphones_logo.png'
import'./App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      songs: songsData,
      errorMessage: ""
    }
  }
  componentDidMount() {
    getSongsData(songsData)
  }
  render() {
    return (
      <main className='App'>
        <div>
          <h1>Beats4Devs</h1>
          <img src={headphones} className='headphones-image' alt='headphones' />
        </div>
        <Songs songs={this.state.songs} />
      </main>
    )
  }
}

export default App;
