import React from 'react'
import './Songs.css'
import Card from '../Card/Card'

const Songs = ({ songs, saveSongPlaylist }) => {
    
    const songCards = songs.map(song => {
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

    return (
        <div className='songs-container'>
            {songCards}
        </div>
    )
}

export default Songs