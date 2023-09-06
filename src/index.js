import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import saveSongReducer from "./features/saveSong/saveSongSlice.js";
import "./index.css";
import App from "./components/App/App";

// store lives in index.js
// entire app has access to store

// export const store = configureStore({
//   reducer: {
//     favoriteSongs: saveSongReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    favoriteSongs: saveSongReducer,
  },
});

// Fetch data from local storage
const localFavoriteSongs = localStorage.getItem("favoriteSongs");

// Check if local storage data is available and parse it
if (localFavoriteSongs) {
  const parsedFavoriteSongs = JSON.parse(localFavoriteSongs);

  // Dispatch an action to set the local storage data in the Redux store
  store.dispatch({
    type: "favoriteSongs/saveSong", // Use the action type as defined in your slice
    payload: parsedFavoriteSongs,
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //prevents prop drilling
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
