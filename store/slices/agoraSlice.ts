// agoraSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAgoraRTCClient,
  IAgoraRTCRemoteUser,
  ILocalAudioTrack,
  ILocalVideoTrack,
} from "agora-rtc-sdk-ng";
import { AgoraState } from "../types/agoraType";

const initialState: AgoraState = {
  clients: [],
  publishingClient: null,
  localVideoTrack: null,
  localAudioTrack: null,
  remoteUsers: [],
  volumeIndicator: [],
  muteVideoState: false,
  muteAudioState: false,
  test: false,
  token: null,
  streams: null,
};

export const agoraSlice = createSlice({
  name: "agora",
  initialState,
  reducers: {
    setClients: (state, action: PayloadAction<IAgoraRTCClient[]>) => {
      state.clients = action.payload;
    },
    setPublishingClient: (
      state,
      action: PayloadAction<IAgoraRTCClient | null>
    ) => {
      debugger;
      state.publishingClient = action.payload;
    },
    setLocalVideoTrack: (
      state,
      action: PayloadAction<ILocalVideoTrack | null>
    ) => {
      state.localVideoTrack = action.payload;
    },
    setLocalAudioTrack: (
      state,
      action: PayloadAction<ILocalAudioTrack | null>
    ) => {
      state.localAudioTrack = action.payload;
    },
    setRemoteUsers: (state, action: PayloadAction<IAgoraRTCRemoteUser[]>) => {
      state.remoteUsers = action.payload;
    },
    setVolumeIndicator: (
      state,
      action: PayloadAction<{ uid: number; level: number }[]>
    ) => {
      state.volumeIndicator = action.payload;
    },
    toggleMuteVideoState: (state) => {
      state.muteVideoState = !state.muteVideoState;
    },
    toggleMuteAudioState: (state) => {
      state.muteAudioState = !state.muteAudioState;
    },
    toggleTest: (state) => {
      state.test = !state.test;
    },
    resetAgoraState: (state) => {
      Object.assign(state, initialState);
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setStreams: (state, action: any) => {
      state.streams = action.payload;
    },
  },
});

export const {
  setClients,
  setPublishingClient,
  setLocalVideoTrack,
  setLocalAudioTrack,
  setRemoteUsers,
  setVolumeIndicator,
  toggleMuteVideoState,
  toggleMuteAudioState,
  toggleTest,
  resetAgoraState,
  setToken,
  setStreams,
} = agoraSlice.actions;

export default agoraSlice.reducer;
