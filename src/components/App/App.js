import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Songs from '../Songs/Songs'
import getSongsData from '../../apiCalls'
import Header from '../Header/Header'
import Playlist from '../Playlist/Playlist'
import loading from '../../assets/loading.png'
import'./App.css'

const App = () => {
  const CLIENT_ID = '006804fd2b7a4eb5aaee1c88d0716840'
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [songs, setSongs] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
 
  useEffect(() => { 
    getSongsData(`/songs`)
    .then((data) => setSongs(data.songs))
    .catch((error) => {
      setErrorMessage( 'An error occurred, please try again.')
    })
  },[]) 

    return (
    <div className='app-container'>
      <main>
        <a href={`${AUTH_ENDPOINT}?client_id-${CLIENT_ID}&redirect_uri-${REDIRECT_URI}&response_type-${RESPONSE_TYPE}`}>login to Spotify</a>
      <Header />
      <Switch>
      <Route exact path='/' render={() => <Songs songs={songs} />} />
      <Route exact path='/playlist' render={() => <Playlist songs={songs} />}/>
      <Route path='*'>
            <h3>404: Sorry, that page doesn't exist.</h3>
      </Route>
      </Switch>
      {!errorMessage && !songs.length && (
        <div>
          <img src={loading} alt='loading' className='loading-image' />
          <h4 className='loading-text'>...loading your music</h4>
        </div>
      )}
      </main>
    </div> 
    )
  }

export default App;
