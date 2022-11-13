import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'

const Playlist = ({ favoriteSongs, saveSongPlaylist, deleteSong }) => {
    
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
                deleteSong={deleteSong}
                favoriteSongs={favoriteSongs}
            />
        )
    })

    if(!favoriteSongs.length) {
        return <h2 className='favorite-songs-message'>Go add some of your favorite songs!</h2>
    } else {
        return (
            <div className='songs-container'>
                {favoriteSongList}
            </div>
        )
    }
}

export default Playlist

Playlist.propTypes = {
    favoriteSongs: PropTypes.arrayOf(PropTypes.object),
    saveSongPlaylist: PropTypes.func.isRequired
}

