import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    movieNames: null,
    gptMovieResult: null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGptMovieResults: (state, action) => {
      state.gptMovieResult = action.payload;
    },
    addMovieNames: (state, action) => {
      state.movieNames = action.payload;
    },
  },
});

export const { toggleGPTSearchView, addGptMovieResults, addMovieNames } =
  gptSlice.actions;
export default gptSlice.reducer;
