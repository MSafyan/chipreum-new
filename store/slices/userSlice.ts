import { createSlice } from "@reduxjs/toolkit";
import { userReducerState } from "@/store/types/userType";

const initialState: userReducerState = {
  user: {
    loading: false,
    user: null,
    jwt: null,
  },
  redirectTo: null,
  showStoryModel: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    setRedirectTo: (state, action) => {
      state.redirectTo = action.payload;
    },
    setShowStoryModel: (state, action) => {
      state.showStoryModel = action.payload;
    },
  },
});

export const { setUser, setRedirectTo, setShowStoryModel } = userSlice.actions;

export default userSlice.reducer;
