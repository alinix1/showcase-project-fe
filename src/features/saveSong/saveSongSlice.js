import { createSlice } from "@reduxjs/toolkit";

// global centralized state via Redux
// reducers live in this slice.js file

const initialState = {
  favoriteSongs: [],
};

export const saveSongSlice = createSlice({
  // matches initialState = favoriteSongs
  // access initialState
  // reducers - action performed (i.e., increment and decrement actions)
  name: "favoriteSongs",
  initialState,
  reducers: {
    saveSong: (state, action) => {
      // state and action passed in
      // either adding a song to the playlist or deleting from the playlist
      state.favoriteSongs.push(action.payload);
    },

    deleteSong: (state, action) => {
      state.favoriteSongs = state.favoriteSongs.filter(
        (song) => song !== action.payload
      );
    },
  },
});

export const { saveSong, deleteSong, openYouTubeSong } = saveSongSlice.actions;

export default saveSongSlice.reducer;
