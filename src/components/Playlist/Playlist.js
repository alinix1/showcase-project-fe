import React from 'react'
import Card from '../Card/Card'

const Playlist = ({ favoriteSongs, saveSongPlaylist }) => {
    
    const favoriteSongList = favoriteSongs.map(song => {
        return (
            <Card
                id={song.id}
                albumCover={song.albumCover}
                album={song.album}
                releaseDate={song.releaseDate}
                artist={song.artist}
                songTitle={song.songTitle}
                genre={song.genre}
                key={song.id}
                saveSongPlaylist={saveSongPlaylist}
            />
        )
    })

    if (!favoriteSongs.length) {
        return <h2>Go add some of your fave songs!</h2>
    } else {
        return (
            <div className='songs-container'>
                {favoriteSongList}
                
            </div>
        )
    }
}

export default Playlist

