import React from "react";
import PropTypes from "prop-types";
import heart from "../../assets/heart-icon.png";
import active from "../../assets/active-heart-icon.png";
import "./Card.css";
import { useSelector, useDispatch } from "react-redux";
import { saveSong, deleteSong } from "../../features/saveSong/saveSongSlice";

const Card = ({
  id,
  albumCover,
  album,
  releaseDate,
  artist,
  songTitle,
  genre,
  songDetails,
  className,
}) => {
  const dispatch = useDispatch();
  const faveSongs = useSelector((state) => state.favoriteSongs);

  return (
    <div className={`card generic-card ${className}`} data-cy="card-element">
      <div
        className="card-side card-side-front"
        data-cy="card-side-front-element"
      >
        <img
          className="mini-album-cover"
          data-cy="mini-album-cover-img"
          alt="album cover"
          src={albumCover}
          loading="lazy"
        />
        <p className="album-card" data-cy="album-card-element">
          Album: {album}
        </p>
        <p className="release-date-card" data-cy="release-date-card-element">
          Release Date: {releaseDate}
        </p>
        <p className="artist-card" data-cy="artist-card-element">
          Artist: {artist}
        </p>
        <p className="genre-card" data-cy="genre-card-element">
          Genre: {genre}
        </p>
      </div>
      <div
        className="card-side card-side-back"
        data-cy="card-side-back-element"
      >
        <div className="heart-container" data-cy="heart-container-element">
          {!faveSongs.favoriteSongs.includes(id) && (
            <img
              className="heart-icon"
              data-cy="heart-icon-element"
              src={heart}
              alt="add favorite"
              loading="lazy"
              onClick={() => dispatch(saveSong(id))}
            />
          )}
          {faveSongs.favoriteSongs.includes(id) && (
            <img
              className="heart-icon"
              data-cy="heart-icon-element"
              src={active}
              alt="delete favorite"
              loading="lazy"
              onClick={() => dispatch(deleteSong(id))}
            />
          )}
        </div>
        <img
          className="mini-album-cover-back"
          data-cy="mini-album-cover-back-img"
          alt="album cover"
          loading="lazy"
          src={albumCover}
        />
        <p className="song-details-card" data-cy="song-details-card-element">
          {songDetails}
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
      </div>
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
  className: PropTypes.string,
};
