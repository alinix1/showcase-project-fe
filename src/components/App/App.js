import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Songs from "../Songs/Songs";
import getSongsData from "../../apiCalls";
import Header from "../Header/Header";
import Playlist from "../Playlist/Playlist";
import About from "../About/About";
import loading from "../../assets/loading.png";
import "./App.css";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getSongsData("/songs")
      .then((data) => setSongs(data.songs))
      .catch((error) => {
        setErrorMessage("An error occurred, please try again.");
      });
  }, []);

  return (
    <div className="app-container">
      <main>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Songs songs={songs} />} />
          <Route exact path="/about" render={() => <About />} />
          <Route
            exact
            path="/playlist"
            render={() => <Playlist songs={songs} />}
          />
          <Route path="*">
            <h3 data-cy="error-message-element">
              404: Sorry, that page doesn't exist.
            </h3>
          </Route>
        </Switch>
        {!errorMessage && !songs.length && (
          <div>
            <img
              src={loading}
              alt="loading"
              className="loading-image"
              data-cy="loading-text-element"
            />
            <h4 className="loading-text" data-cy="loading-text-element">
              ...loading your music
            </h4>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
