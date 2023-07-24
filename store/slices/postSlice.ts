import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostState } from "../types/postType";

const initialState: PostState = {
  posts: [],
  post: null,
  loading: false,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
      state.loading = false;
    },
    setPost: (state, action) => {
      state.post = action.payload.post;
      state.loading = false;
    },
  },
});

export const { setLoading, setPosts, setPost } = postSlice.actions;
export default postSlice.reducer;
