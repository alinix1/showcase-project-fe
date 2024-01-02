import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import "./Playlist.css";

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
            songDetails={song.songDetails}
            key={song.id}
            className={
              favSongs.favoriteSongs.includes(song.id) ? "playlist-card" : ""
            }
          />
        );
      }
    });
    return favArr;
  }, []);
  if (!favoriteSongList.length) {
    return (
      <h2
        className="favorite-songs-message"
        data-cy="favorite-songs-message-element"
      >
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
