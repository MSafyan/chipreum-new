import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IAgoraRTCClient,
  IAgoraRTCRemoteUser,
  MicrophoneAudioTrackInitConfig,
  CameraVideoTrackInitConfig,
  ICameraVideoTrack,
  ILocalTrack,
  IMicrophoneAudioTrack,
} from "agora-rtc-sdk-ng";
import { RootState, store } from "@/store/store";
import {
  setLocalAudioTrack,
  setLocalVideoTrack,
  toggleMuteAudioState,
  toggleMuteVideoState,
  setRemoteUsers,
  setVolumeIndicator,
  setPublishingClient,
} from "@/store/slices/agoraSlice";
import {
  deleteStreamAction,
  getTokenAction,
} from "@/store/actions/agoraAction";

let AgoraRTC: any;

export interface volume {
  uid: number;
  level: number;
}

export default function useAgora() {
  const dispatch = useDispatch();

  // Select state values using useSelector
  const {
    localAudioTrack,
    localVideoTrack,
    remoteUsers,
    volumeIndicator,
    muteVideoState,
    muteAudioState,
    publishingClient,
    test,
  } = useSelector((state: RootState) => state.agora);

  async function createLocalTracks(
    audioConfig?: MicrophoneAudioTrackInitConfig,
    videoConfig?: CameraVideoTrackInitConfig
  ): Promise<[IMicrophoneAudioTrack?, ICameraVideoTrack?]> | null {
    let microphoneTrack: IMicrophoneAudioTrack | undefined;
    let screenVideoTrack: ICameraVideoTrack | undefined;
    debugger;
    try {
      microphoneTrack = await AgoraRTC.createMicrophoneAudioTrack(audioConfig);
      dispatch(setLocalAudioTrack(microphoneTrack));
    } catch (error) {
      console.error("Error creating microphone track:", error);
      // Handle the error ely, e.g. show a user-friendly error message
      return null;
    }

    try {
      screenVideoTrack = await AgoraRTC.createScreenVideoTrack(videoConfig);
      dispatch(setLocalVideoTrack(screenVideoTrack));
    } catch (error) {
      console.error("Error creating video track:", error);
      // Handle the error appropriately, e.g. show a user-friendly error message
      return null; // return early if error occurs during video track creation
    }

    return [microphoneTrack, screenVideoTrack];
  }

  const publishClient = async (
    publishingClient: IAgoraRTCClient,
    tracks: ILocalTrack[]
  ) => {
    console.log("Publishing tracks...");
    await publishingClient.setClientRole("host");
    await publishingClient.publish(tracks);
    dispatch(setPublishingClient(publishingClient));
  };

  const join = async (
    newClient: IAgoraRTCClient,
    appid: string,
    channel: string,
    publish: boolean,
    token?: string,
    uid?: string | number | null
  ) => {
    let microphoneTrack, screenVideoTrack;
    if (publish) {
      const result = await createLocalTracks();
      if (!result) {
        console.error("Failed to create local tracks.");
        // Here, handle the error appropriately. Maybe show a user-friendly message or take some other action.
        return; // Exit early from the current function.
      }

      [microphoneTrack, screenVideoTrack] = result;
    }
    debugger;
    try {
      await newClient.join(appid, channel, token || null, uid);
      if (publish && microphoneTrack && screenVideoTrack) {
        publishClient(newClient, [microphoneTrack, screenVideoTrack]);
      } else {
        console.log("Skipping publishing tracks...");
        await newClient.setClientRole("audience");
      }
      debugger;
      await newClient.enableAudioVolumeIndicator();
      // dispatch(setPublishingClient(newClient));
    } catch (error) {
      if (error.type === "AgoraRTCException" && error.code === "UID_CONFLICT") {
        console.error("UID conflict error:", error);
        // Implement your handling logic here.
      } else {
        console.error("Other error during join:", error);
      }
    }
  };

  const onStartStreamClick = async () => {
    const userId = store.getState().users.user.user?._id;
    if (!userId) return;
    let channelId = userId;
    const appid = "604316ffbaa44ea087a4a9e85f2d441d"; // Replace with your actual App ID
    var token = await getTokenAction(true);

    if (!token) return;

    var publishingClient = AgoraRTC.createClient({
      codec: "h264",
      mode: "live",
    });

    if (!publishingClient) {
      console.log("Client not initialized. Exiting...");
      return;
    }

    if (publishingClient.connectionState === "DISCONNECTED") {
      await join(publishingClient, appid, channelId, true, token, userId);
    }
  };
  const onJoinStreamSubscriber = async (_channelId: string) => {
    const userId = store.getState().users.user.user?._id;
    debugger;

    let channelId = _channelId;
    if (!userId) return;
    if (!channelId) {
      channelId = userId;
    }
    const appid = "604316ffbaa44ea087a4a9e85f2d441d"; // Replace with your actual App ID
    let token = await getTokenAction(false, _channelId);

    if (!token) return;

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
        channelId as string,
        false,
        token,
        userId
      );
    }

    publishingClient.on(
      "user-published",
      handleUserPublished(publishingClient)
    );

    publishingClient.on(
      "user-unpublished",
      handleUserUnpublished(publishingClient)
    );
  };

  const leave = async (client: IAgoraRTCClient) => {
    if (localAudioTrack) {
      localAudioTrack.stop();
      localAudioTrack.close();
      dispatch(setLocalAudioTrack(null));
    }
    if (localVideoTrack) {
      localVideoTrack.stop();
      localVideoTrack.close();
      dispatch(setLocalVideoTrack(null));
    }
    dispatch(setRemoteUsers([]));
    dispatch(setPublishingClient(null));
    dispatch(setVolumeIndicator([]));
    await client?.leave();
  };

  const stopStreaming = async () => {
    if (publishingClient) {
      const channelName = publishingClient.channelName;
      if (channelName) {
        await deleteStreamAction(channelName);
        await leave(publishingClient);
      }
    }
  };

  const muteVideo = () => {
    localVideoTrack?.setEnabled(muteVideoState);
    dispatch(toggleMuteVideoState());
  };

  const muteAudio = () => {
    localAudioTrack?.setEnabled(muteAudioState);
    dispatch(toggleMuteAudioState());
  };

  const handleUserPublished =
    (publishingClient: IAgoraRTCClient) =>
    async (user: IAgoraRTCRemoteUser, mediaType: "audio" | "video") => {
      await publishingClient.subscribe(user, mediaType);
      dispatch(setRemoteUsers(Array.from(publishingClient.remoteUsers)));
    };

  const handleUserUnpublished =
    (publishingClient: IAgoraRTCClient) =>
    async (user: IAgoraRTCRemoteUser) => {
      if (publishingClient?.channelName === user.uid) {
        dispatch(
          setRemoteUsers(
            Array.from(
              publishingClient.remoteUsers.filter((u) => u.uid !== user.uid)
            )
          )
        );
        await deleteStreamAction(publishingClient?.channelName);
      }
    };

  const handleVolumeIndicator = (volumes: Array<volume>) => {
    dispatch(setVolumeIndicator(volumes));
  };

  useEffect(() => {
    if (publishingClient) {
      publishingClient.on(
        "user-published",
        handleUserPublished(publishingClient)
      );
      publishingClient.on(
        "user-unpublished",
        handleUserUnpublished(publishingClient)
      );
      // publishingClient.on("volume-indicator", handleVolumeIndicator);

      return () => {
        publishingClient.off(
          "user-published",
          handleUserPublished(publishingClient)
        );
        publishingClient.off(
          "user-unpublished",
          handleUserUnpublished(publishingClient)
        );
        // publishingClient.off("volume-indicator", handleVolumeIndicator);
      };
    }
  }, [publishingClient, dispatch]);

  useEffect(() => {
    import("agora-rtc-sdk-ng").then((Agora) => {
      AgoraRTC = Agora.default;
    });
  }, []);

  // useEffect(() => {
  //   const checkConnection = setInterval(() => {
  //     if (
  //       publishingClient &&
  //       publishingClient.connectionState === "DISCONNECTED"
  //     ) {
  //       debugger;
  //       console.log("The host has stopped streaming.");
  //     }
  //   }, 5000);

  //   return () => clearInterval(checkConnection);
  // }, [publishingClient]);

  return {
    onStartStreamClick,
    onJoinStreamSubscriber,
    localAudioTrack,
    localVideoTrack,
    leave,
    stopStreaming,
    join,
    remoteUsers,
    volumeIndicator,
    muteVideo,
    muteVideoState,
    muteAudio,
    muteAudioState,
    publishingClient,
    test,
  };
}
