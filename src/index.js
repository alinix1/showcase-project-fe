import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import saveSongReducer from "./features/saveSong/saveSongSlice.js";
import "./index.css";
import App from "./components/App/App";

export const store = configureStore({
  reducer: {
    favoriteSongs: saveSongReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
