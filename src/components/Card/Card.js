import React from 'react'
import PropTypes from 'prop-types'
import heart from '../../assets/heart-icon.png'
import active from '../../assets/active-heart-icon.png'
import './Card.css'

const Card = ({ id, albumCover, album, releaseDate, artist, songTitle, genre, saveSongPlaylist, deleteSong, favoriteSongs }) => {
    const favorited = !!favoriteSongs.find(favoriteSong => favoriteSong.id === id)
    const heartImage = favorited ? active : heart

    const handleClick = () => {
        if (favorited) {
            deleteSong(id)
        } else {
            saveSongPlaylist(id)
        }

    }

    return (
        <div className='card'>
            <img className='mini-album-cover' alt='album cover' src={albumCover}/>
            <div className='heart-container'>
                <img onClick={handleClick} src={heartImage} alt='heart icon' />
            </div>
            <p className='album-card'>Album: {album}</p>
            <p className='release-date-card'>Release Date: {releaseDate}</p>
            <p className='artist-card'>Artist: {artist}</p>
            <p className='song-card'>Song: {songTitle}</p>
            <p className='genre-card'>Genre: {genre}</p>
        </div>
    )
}

export default Card

Card.propTypes = {
    id: PropTypes.number.isRequired,
    albumCover: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired, 
    songTitle: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    saveSongPlaylist: PropTypes.func.isRequired
}
