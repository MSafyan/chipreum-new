import { createSlice } from "@reduxjs/toolkit";
import { userReducerState } from "store/types/userType";

const initialState: userReducerState = {
  user: {
    loading: false,
    user: null,
    jwt: null,
  },
  redirectTo: null,
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
  },
});

export const { setUser, setRedirectTo } = userSlice.actions;

export default userSlice.reducer;
