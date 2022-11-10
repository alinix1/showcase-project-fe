import React from 'react'
import './Card.css'

const Card = ({ id, albumCover, album, releaseDate, artist, songTitle, genre }) => {
    return (
        <div className='card'>
            <img className='mini-album-cover' alt='album cover' src={albumCover}/>
            <p>{album}</p>
            <p>{releaseDate}</p>
            <p>{artist}</p>
            <p>{songTitle}</p>
            <p>{genre}</p>
        </div>
    )
}

export default Card