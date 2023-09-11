import {
  IAgoraRTCClient,
  IAgoraRTCRemoteUser,
  ILocalAudioTrack,
  ILocalVideoTrack,
} from "agora-rtc-sdk-ng";
import { User } from "./userType";

export interface AgoraState {
  clients: IAgoraRTCClient[];
  publishingClient: IAgoraRTCClient | null;
  localVideoTrack: ILocalVideoTrack | null;
  localAudioTrack: ILocalAudioTrack | null;
  remoteUsers: IAgoraRTCRemoteUser[];
  volumeIndicator: { uid: number; level: number }[];
  muteVideoState: boolean;
  muteAudioState: boolean;
  test: boolean;
  token: string | null;
  streams: Stream[] | null;
}

export interface Stream {
  _id: string;
  createdAt: string;
  owner: User;
}
