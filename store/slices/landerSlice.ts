import { createSlice } from "@reduxjs/toolkit";
import { landerReducerState } from "@/store/types/landerType";

const initialState: landerReducerState = {
  landers: [],
  loading: false,
};

export const landerSlice = createSlice({
  name: "lander",
  initialState,
  reducers: {
    setLanders: (state, action) => {
      state.landers = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLanders, setLoading } = landerSlice.actions;

export default landerSlice.reducer;
