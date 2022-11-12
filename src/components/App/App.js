import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Songs from '../Songs/Songs'
import getSongsData from '../../apiCalls'
import Header from '../Header/Header'
import Playlist from '../Playlist/Playlist'
// import Sidebar from '../Sidebar/Sidebar'
import'./App.css'
import { setSelectionRange } from '@testing-library/user-event/dist/utils'

class App extends Component {
  constructor() {
    super()
    this.state = {
      songs: [],
      favoriteSongs: [],
      errorMessage: ""
    }
  }

  componentDidMount() {
    getSongsData(`/songs`)
    .then((data) => this.setState({ songs: data }))
    .catch((error) => {
      this.setState({
        ...this.state,
        errorMessage: 'An error occurred, please try again.'
      })
    })
  }

  saveSongPlaylist = (ID) => {
    const favoriteSong = this.state.songs.find(song => song.id === ID)
    if (!this.state.favoriteSongs.includes(favoriteSong)) {
      this.setState({ favoriteSongs: [...this.state.favoriteSongs, favoriteSong] })
    }
  }
  
  render() {
    return (
    <div className='app-container'>
      <main>
      <Header />
      <Switch>
      <Route exact path='/' render={() => <Songs songs={this.state.songs} saveSongPlaylist={this.saveSongPlaylist} />} />
      <Route exact path='/playlist' render={() => <Playlist favoriteSongs={this.state.favoriteSongs} saveSongPlaylist={this.saveSongPlaylist}/>}/>
      </Switch>
      </main>
    </div> 
    )
  }
}

export default App;
