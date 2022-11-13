import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Songs from '../Songs/Songs'
import getSongsData from '../../apiCalls'
import Header from '../Header/Header'
import Playlist from '../Playlist/Playlist'
import'./App.css'



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
    .then((data) => this.setState({ songs: data.songs }))
    .catch((error) => {
      this.setState({
        ...this.state,
        errorMessage: 'An error occurred, please try again.'
      })
    })
  }

  saveSongPlaylist = (id) => {
    const favoriteSong = this.state.songs.find(song => song.id === id)
    if (!this.state.favoriteSongs.includes(favoriteSong)) {
      this.setState({ favoriteSongs: [...this.state.favoriteSongs, favoriteSong] })
    }
  }

  deleteSong = (id) => {
    const deleteFavoriteSong = this.state.favoriteSongs.filter(song => song.id !== id)
    this.setState({ favoriteSongs: deleteFavoriteSong})
   
  }
  
  render() {
    return (
    <div className='app-container'>
      <main>
      <Header />
      <Switch>
      <Route exact path='/' render={() => <Songs songs={this.state.songs} favoriteSongs={this.state.favoriteSongs} saveSongPlaylist={this.saveSongPlaylist} deleteSong={this.deleteSong}  />} />
      <Route exact path='/playlist' render={() => <Playlist favoriteSongs={this.state.favoriteSongs} saveSongPlaylist={this.saveSongPlaylist} deleteSong={this.deleteSong} />}/>
      <Route path='*'>
            <h3>404: Sorry, that page doesn't exist.</h3>
      </Route>
      </Switch>
      </main>
    </div> 
    )
  }
}


export default App;
