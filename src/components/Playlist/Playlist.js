import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

// avoid the hassle of prop drilling and simply pass down songs
// makes copies of everything (Redux) - does not mutate state in the store
// debugging functionality

const Playlist = ({ songs }) => {
  const favSongs = useSelector((state) => state.favoriteSongs);
  const favoriteSongList = favSongs.favoriteSongs.reduce((favArr, favSong) => {
    songs.forEach((song) => {
      if (favSong === song.id) {
        favArr.push(
          <Card
            id={song.id}
            albumCover={song.albumCover}
            album={song.album}
            releaseDate={song.releaseDate}
            artist={song.artist}
            songTitle={song.songTitle}
            genre={song.genre}
            key={song.id}
          />
        );
      }
    });
    return favArr;
  }, []);
  if (!favoriteSongList.length) {
    return (
      <h2 className="favorite-songs-message">
        Go add some of your favorite songs!
      </h2>
    );
  } else {
    return <div className="songs-container">{favoriteSongList}</div>;
  }
};
export default Playlist;

Playlist.propTypes = {
  favoriteSongs: PropTypes.arrayOf(PropTypes.object),
};
