import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageState } from "../types/languageType";

const initialState: LanguageState = {
  languages: [],
  loading: false,
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguages: (state, action: PayloadAction<LanguageState>) => {
      state.languages = action.payload.languages;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLanguages, setLoading } = languageSlice.actions;

export default languageSlice.reducer;
