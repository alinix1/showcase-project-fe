import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useLocalStorage } from "../../useLocalStorage";

const Playlist = ({ songs }) => {
  const [localStorageSongs, setLocalStorageSongs] = useLocalStorage(
    "favoriteSongs",
    []
  );
  const [favoriteSongs, setFavoriteSongs] = useState(localStorageSongs);
  const favSongs = useSelector((state) => state.favoriteSongs);
  const dispatch = useDispatch();
  useEffect(() => {
    setLocalStorageSongs(favoriteSongs);
  }, [favoriteSongs, setLocalStorageSongs]);
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
