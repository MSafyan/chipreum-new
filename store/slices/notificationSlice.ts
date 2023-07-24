import { createSlice } from "@reduxjs/toolkit";
import { NotificationState } from "../types/notificationType";

const initialState: NotificationState = {
  notifications: {
    unSeen: 0,
    data: [],
  },
  loading: false,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    resetUnseen: (state) => {
      state.notifications.unSeen = 0;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setNotifications, resetUnseen, setLoading } =
  notificationSlice.actions;

export default notificationSlice.reducer;
