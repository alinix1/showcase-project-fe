import React from "react";
import PropTypes from "prop-types";
import heart from "../../assets/heart-icon.png";
import active from "../../assets/active-heart-icon.png";
import "./Card.css";
import { useSelector, useDispatch } from "react-redux";
import { saveSong, deleteSong } from "../../features/saveSong/saveSongSlice";
import { Link } from "react-router-dom";

// React Redux Hooks:
// useSelector - get info from the store
// useDispatch - dispatch the action on reducers (saveSong and deleteSong)

const Card = ({
  id,
  albumCover,
  album,
  releaseDate,
  artist,
  songTitle,
  genre,
}) => {
  const dispatch = useDispatch();
  const faveSongs = useSelector((state) => state.favoriteSongs);

  return (
    <div className="card">
      <img className="mini-album-cover" alt="album cover" src={albumCover} />
      <div className="heart-container">
        {!faveSongs.favoriteSongs.includes(id) && (
          <img
            src={heart}
            alt="add favorite"
            onClick={() => dispatch(saveSong(id))}
          />
        )}
        {faveSongs.favoriteSongs.includes(id) && (
          <img
            src={active}
            alt="delete favorite"
            onClick={() => dispatch(deleteSong(id))}
          />
        )}
      </div>
      <p className="album-card">Album: {album}</p>
      <p className="release-date-card">Release Date: {releaseDate}</p>
      <p className="artist-card">Artist: {artist}</p>
      <a
        className="song-card"
        href="https://open.spotify.com/playlist/4E4reOpjBY0iwYUCtWeM76"
        rel="noreferrer"
        target="_blank"
      >
        Song: {songTitle}
      </a>
      <p className="genre-card">Genre: {genre}</p>
      <Link to={`/${id}`}>
        <p className="song-details-card">More Info</p>
      </Link>
    </div>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  albumCover: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};
