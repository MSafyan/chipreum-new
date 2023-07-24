import { createSlice } from "@reduxjs/toolkit";
import { StoryState } from "../types/StoryType";

const initialState: StoryState = {
  stories: [],
  allStories: [],
  selectedStories: null,
  loading: false,
};

export const storiesSlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    setStories: (state, action) => {
      state.stories = action.payload;
      state.loading = false;
    },
    setAllStories: (state, action) => {
      state.allStories = action.payload;
      state.loading = false;
    },
    setSelectedStories: (state, action) => {
      state.selectedStories = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setStories, setLoading, setAllStories, setSelectedStories } =
  storiesSlice.actions;

export default storiesSlice.reducer;
