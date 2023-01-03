import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Songs from '../Songs/Songs'
import getSongsData from '../../apiCalls'
import Header from '../Header/Header'
import Playlist from '../Playlist/Playlist'
import'./App.css'

const App = () => {
  const [songs, setSongs] = useState([])
  const [favoriteSongs, setFavoriteSongs] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
 
  useEffect(() => { 
    getSongsData(`/songs`)
    .then((data) => setSongs(data.songs))
    .catch((error) => {
      setErrorMessage( 'An error occurred, please try again.')
    })
  },[])

  const saveSongPlaylist = (id) => {
    const favoriteSong = songs.find(song => song.id === id)
    if (!favoriteSongs.includes(favoriteSong)) {
      setFavoriteSongs(...favoriteSongs, favoriteSong)
    }
  }

  const deleteSong = (id) => {
    const deleteFavoriteSong = favoriteSongs.filter(song => song.id !== id)
    setFavoriteSongs(deleteFavoriteSong)
   
  }
    return (
    <div className='app-container'>
      <main>
      <Header />
      <Switch>
      <Route exact path='/' render={() => <Songs songs={songs} favoriteSongs={favoriteSongs} saveSongPlaylist={saveSongPlaylist} deleteSong={deleteSong}  />} />
      <Route exact path='/playlist' render={() => <Playlist favoriteSongs={favoriteSongs} saveSongPlaylist={saveSongPlaylist} deleteSong={deleteSong} />}/>
      <Route path='*'>
            <h3>404: Sorry, that page doesn't exist.</h3>
      </Route>
      </Switch>
      </main>
    </div> 
    )
  }

export default App;
