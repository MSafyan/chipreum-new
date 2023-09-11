import { useState, useEffect } from "react";
import {
  IAgoraRTCClient,
  IAgoraRTCRemoteUser,
  MicrophoneAudioTrackInitConfig,
  CameraVideoTrackInitConfig,
  IMicrophoneAudioTrack,
  ICameraVideoTrack,
  ILocalVideoTrack,
  ILocalAudioTrack,
  ILocalTrack,
} from "agora-rtc-sdk-ng";

let AgoraRTC: any;

export interface volume {
  uid: number;
  level: number;
}
export default function useAgora(): {
  onStartStreamClick: () => Promise<void>; // <-- Add this line
  localAudioTrack: ILocalAudioTrack | undefined;
  localVideoTrack: ILocalVideoTrack | undefined;
  leave: Function;
  join: Function;
  remoteUsers: IAgoraRTCRemoteUser[];
  volumeIndicator: Array<volume> | undefined;
  muteVideo: Function;
  muteVideoState: boolean;
  muteAudio: Function;
  muteAudioState: boolean;
  publishingClient: IAgoraRTCClient | undefined;
  test: boolean;
  setTest: Function;
} {
  const [clients, setClients] = useState<IAgoraRTCClient[] | undefined>([]);
  const [publishingClient, setPublishingClient] = useState<
    IAgoraRTCClient | undefined
  >(undefined);
  const [localVideoTrack, setLocalVideoTrack] = useState<
    ILocalVideoTrack | undefined
  >(undefined);
  const [localAudioTrack, setLocalAudioTrack] = useState<
    ILocalAudioTrack | undefined
  >(undefined);
  const [volumeIndicator, setVolumeIndicator] = useState<
    Array<volume> | undefined
  >(undefined);
  const [muteVideoState, setMuteVideoState] = useState(false);
  const [muteAudioState, setMuteAudioState] = useState(false);

  const [remoteUsers, setRemoteUsers] = useState<IAgoraRTCRemoteUser[]>([]);
  const [test, setTest] = useState(false);

  async function createLocalTracks(
    audioConfig?: MicrophoneAudioTrackInitConfig,
    videoConfig?: CameraVideoTrackInitConfig
  ): Promise<[IMicrophoneAudioTrack, ICameraVideoTrack]> {
    const [microphoneTrack, cameraTrack] =
      await AgoraRTC.createMicrophoneAndCameraTracks(audioConfig, videoConfig);
    debugger;
    console.log("Local tracks created: ", microphoneTrack, cameraTrack);
    setLocalAudioTrack(microphoneTrack);
    setTest(true);
    localStorage.setItem("microphoneTrack", microphoneTrack);
    setLocalVideoTrack(cameraTrack);
    return [microphoneTrack, cameraTrack];
  }

  const publishClient = async (
    publishingClient: IAgoraRTCClient,
    tracks: ILocalTrack[]
  ) => {
    console.log("Publishing tracks...");
    await publishingClient.setClientRole("host");
    await publishingClient.publish(tracks);
    setPublishingClient(publishingClient);
  };

  async function join(
    newClient: IAgoraRTCClient,
    appid: string,
    channel: string,
    publish: boolean,
    token?: string,
    uid?: string | number | null
  ) {
    if (!newClient) return;
    // debugger;
    clients?.length
      ? await setClients([...clients, newClient])
      : await setClients([newClient]);

    console.log(
      `Joining: \nChannel: ${channel} \nClient: `,
      newClient,
      `\nAPP ID: ${appid} \nToken: ${token}`
    );
    let microphoneTrack, cameraTrack;
    if (publish) {
      [microphoneTrack, cameraTrack] = await createLocalTracks();
    }

    await newClient.join(appid, channel, token || null);
    if (publish && microphoneTrack && cameraTrack) {
      publishClient(newClient, [microphoneTrack, cameraTrack]);
    } else {
      console.log("Skipping publishing tracks...");
      await newClient.setClientRole("audience");
    }
    await newClient.enableAudioVolumeIndicator();

    (window as any).newClient = newClient;
    (window as any).videoTrack = cameraTrack;
  }

  async function leave(client: IAgoraRTCClient, lastClient: boolean) {
    if (lastClient) {
      if (localAudioTrack) {
        localAudioTrack.stop();
        localAudioTrack.close();
      }
      if (localVideoTrack) {
        localVideoTrack.stop();
        localVideoTrack.close();
        setLocalVideoTrack(undefined);
      }
      setRemoteUsers([]);
      setVolumeIndicator(undefined);
    }
    console.log("Leaving client:", client);
    setMuteVideoState(false);
    setMuteAudioState(false);
    await client?.leave();
  }

  const muteVideo = async () => {
    localVideoTrack?.setEnabled(muteVideoState);
    setMuteVideoState(!muteVideoState);
  };
  const muteAudio = async () => {
    console.log("MuteAudioState: ", muteAudioState);
    localAudioTrack?.setEnabled(muteAudioState);
    setMuteAudioState(!muteAudioState);
  };

  useEffect(() => {
    if (!clients) return;
    clients?.forEach((client) => {
      // debugger;
      setRemoteUsers(client.remoteUsers);

      const handleUserPublished = async (
        user: IAgoraRTCRemoteUser,
        mediaType: "audio" | "video"
      ) => {
        await client.subscribe(user, mediaType);
        if (mediaType === "video") console.log("User published", user);
        // toggle rerender while state of remoteUsers changed.
        setRemoteUsers((remoteUsers) => Array.from(client.remoteUsers));
      };
      const handleUserUnpublished = (user: IAgoraRTCRemoteUser) => {
        setRemoteUsers((remoteUsers) => Array.from(client.remoteUsers));
      };
      const handleUserJoined = (user: IAgoraRTCRemoteUser) => {
        setRemoteUsers((remoteUsers) => Array.from(client.remoteUsers));
      };
      const handleUserLeft = (user: IAgoraRTCRemoteUser) => {
        setRemoteUsers((remoteUsers) => Array.from(client.remoteUsers));
      };
      const handleVolumeIndicator = (volumes: Array<volume>) => {
        setVolumeIndicator(volumes);
      };
      client.on("user-published", handleUserPublished);
      client.on("user-unpublished", handleUserUnpublished);
      client.on("user-joined", (user) => {
        // debugger;
        console.log("User joined:", user);
        handleUserJoined(user);
      });
      client.on("user-left", handleUserLeft);
      client.on("volume-indicator", handleVolumeIndicator);

      return () => {
        client.off("user-published", handleUserPublished);
        client.off("user-unpublished", handleUserUnpublished);
        client.off("user-joined", handleUserJoined);
        client.off("user-left", handleUserLeft);
      };
    });
  }, [clients]);

  useEffect(() => {
    // Lazy-import the Agora SDK on the client side
    import("agora-rtc-sdk-ng").then((Agora) => {
      AgoraRTC = Agora.default;
    });
  }, []);

  const onStartStreamClick = async () => {
    const userId = "YOUR_USER_ID_HERE"; // Replace with the logic to get your user ID if necessary.
    const channelId = "test";
    const appid = "604316ffbaa44ea087a4a9e85f2d441d"; // Replace with your APP ID if necessary.
    // debugger;

    var publishingClient = AgoraRTC.createClient({
      codec: "h264",
      mode: "live",
    });

    if (!publishingClient) {
      console.log("Client not initialized. Exiting...");
      return;
    }

    if (publishingClient.connectionState === "DISCONNECTED") {
      await join(
        publishingClient,
        appid,
        channelId,
        true,
        "007eJxTYDDbOttBWCf2/J5tEwNeJRzsancrm3mssGapht5hr8aevU8UGMwMTIwNzdLSkhITTUxSEw0szBNNEi1TLUzTjFJMTAxTZLkepzQEMjJUXFJhZmSAQBCfhaEktbiEgQEAcrMf1Q==",
        0
      );
      console.log("Joined channel:", channelId);
    }

    if (!localAudioTrack || !localVideoTrack) {
      console.error("Local tracks not created");
      return;
    }

    console.log("Local tracks created");
    console.log("Published tracks to channel");
  };

  return {
    onStartStreamClick,
    localAudioTrack,
    localVideoTrack,
    leave,
    join,
    remoteUsers,
    volumeIndicator,
    muteVideo,
    muteVideoState,
    muteAudio,
    muteAudioState,
    publishingClient,
    test,
    setTest,
  };
}
