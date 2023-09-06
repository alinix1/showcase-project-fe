import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteSongs: [],
};

export const saveSongSlice = createSlice({
  name: "favoriteSongs",
  initialState,
  reducers: {
    saveSong: (state, action) => {
      state.favoriteSongs.push(action.payload);
      localStorage.setItem(
        "favoriteSongs",
        JSON.stringify(state.favoriteSongs)
      );
    },

    deleteSong: (state, action) => {
      state.favoriteSongs = state.favoriteSongs.filter(
        (song) => song !== action.payload
      );

      localStorage.setItem(
        "favoriteSongs",
        JSON.stringify(state.favoriteSongs)
      );
    },
  },
});

export const { saveSong, deleteSong } = saveSongSlice.actions;

export default saveSongSlice.reducer;
