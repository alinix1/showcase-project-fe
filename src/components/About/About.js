import React from "react";
import aboutMusic from "../../assets/about-music.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about-container">
      <img src={aboutMusic} className="about-photo" alt="dj playing music" />
      <div className="about-info">
        <h2 className="about-info-title">About Us:</h2>
        <p className="about-info-text">
          Finding the right music to listen to while focusing on coding can be a
          challenge. <strong>Beats4Devs</strong> provides a single collection of
          music to choose from to facilitate focus while you work.
        </p>
        <p className="about-info-text">
          Trying to get work done but don't know what genre of music to listen
          to? <strong>Beats4Devs</strong> allows you to browse a handpicked
          collection of music. You can save or remove your favorite songs in a
          playlist, as well as click on a link to the Spotify playlist to play
          the songs.
        </p>
      </div>
    </section>
  );
};

export default About;
