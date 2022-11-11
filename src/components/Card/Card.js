import React from 'react'
import './Card.css'

const Card = ({ id, albumCover, album, releaseDate, artist, songTitle, genre }) => {
    return (
        <div className='card'>
            <img className='mini-album-cover' alt='album cover' src={albumCover}/>
            <p className='album-card'>Album: {album}</p>
            <p className='release-date-card'>Release Date: {releaseDate}</p>
            <p className='artist-card'>Artist: {artist}</p>
            <p className='song-card'>Song: {songTitle}</p>
            <p className='genre-card'>Genre: {genre}</p>
        </div>
    )
}

export default Card