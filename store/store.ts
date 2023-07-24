import {
  Action,
  configureStore,
  EnhancedStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import userSlice from "./slices/userSlice";
import landerSlice from "./slices/landerSlice";
import notificationSlice from "./slices/notificationSlice";
import languageSlice from "./slices/languageSlice";
import postSlice from "./slices/postSlice";
import storySlice from "./slices/StorySlice";

const persistConfig = {
  key: "chipream",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  users: userSlice,
  lander: landerSlice,
  notification: notificationSlice,
  language: languageSlice,
  post: postSlice,
  story: storySlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

const setupStore = (_context: any): EnhancedStore => store;

const makeStore: MakeStore<any> = (context: any) => setupStore(context);

export const persistor = persistStore(store);

export const wrapper = createWrapper(makeStore);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
