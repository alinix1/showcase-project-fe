import React from "react";
import PropTypes from "prop-types";
import heart from "../../assets/heart-icon.png";
import active from "../../assets/active-heart-icon.png";
import "./Card.css";
import { useSelector, useDispatch } from "react-redux";
import { saveSong, deleteSong } from "../../features/saveSong/saveSongSlice";
// import { Link } from "react-router-dom";

const Card = ({
  id,
  albumCover,
  album,
  releaseDate,
  artist,
  songTitle,
  genre,
  songDetails,
}) => {
  const dispatch = useDispatch();
  const faveSongs = useSelector((state) => state.favoriteSongs);

  return (
    <div className="card" data-cy="card-element">
      <img
        className="mini-album-cover"
        data-cy="mini-album-cover-img"
        alt="album cover"
        src={albumCover}
      />
      <div className="heart-container" data-cy="heart-container-element">
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
      <p className="album-card" data-cy="album-card-element">
        Album: {album}
      </p>
      <p className="release-date-card" data-cy="release-date-card-element">
        Release Date: {releaseDate}
      </p>
      <p className="artist-card" data-cy="artist-card-element">
        Artist: {artist}
      </p>
      <a
        className="song-card"
        data-cy="song-card-song"
        href="https://open.spotify.com/playlist/4E4reOpjBY0iwYUCtWeM76"
        rel="noreferrer"
        target="_blank"
      >
        Song: {songTitle}
      </a>
      <p className="genre-card" data-cy="genre-card-element">
        Genre: {genre}
      </p>
      <p className="song-details-card" data-cy="song-details-card-element">
        {songDetails}
      </p>
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
