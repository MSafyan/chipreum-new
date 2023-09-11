// useAgora.ts
import { useState, useEffect, useRef, createRef } from "react";
import { store } from "@/store/store";
import type {
  ICameraVideoTrack,
  IMicrophoneAudioTrack,
} from "agora-rtc-sdk-ng";

let AgoraRTC: any;

export const useAgora = () => {
  const [client, setClient] = useState<any>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoStopped, setIsVideoStopped] = useState(false);

  const [localTracks, setLocalTracks] = useState<{
    videoTrack: null | ICameraVideoTrack;
    audioTrack: null | IMicrophoneAudioTrack;
  }>({ videoTrack: null, audioTrack: null });

  useEffect(() => {
    import("agora-rtc-sdk-ng").then((Agora) => {
      if (Agora) {
        console.log("Agora SDK Initialized");
      } else {
        console.log("Error: Agora SDK not initialized");
      }
      AgoraRTC = Agora.default;
      const client = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
      setClient(client);
    });
  }, []);

  const onStartStreamClick = async () => {
    const userId = store.getState().users.user.user?._id;
    var a = process.env.NEXT_PUBLIC_AGORA_APP_ID;
    console.log({ a });
    const channelId = "test"; // Replace with your desired channel ID

    if (client.connectionState === "DISCONNECTED") {
      await client.join(
        "604316ffbaa44ea087a4a9e85f2d441d",
        channelId,
        "007eJxTYDDbOttBWCf2/J5tEwNeJRzsancrm3mssGapht5hr8aevU8UGMwMTIwNzdLSkhITTUxSEw0szBNNEi1TLUzTjFJMTAxTZLkepzQEMjJUXFJhZmSAQBCfhaEktbiEgQEAcrMf1Q==",
        0
      );
      console.log("Joined channel:", channelId);
    }

    // Create and initialize local video and audio tracks
    const [audioTrack, videoTrack] =
      await AgoraRTC.createMicrophoneAndCameraTracks();

    setLocalTracks({ audioTrack, videoTrack });

    // After creating local tracks
    if (audioTrack && videoTrack) {
      console.log("Local tracks created");
    } else {
      console.log("Error: Local tracks not created");
    }

    console.log("Created local tracks");
    await client.setClientRole("host");

    await client.publish([audioTrack, videoTrack]);
    console.log("Published tracks to channel");
  };

  const toggleMute = () => {
    if (isMuted) {
      localTracks.audioTrack?.play();
    } else {
      localTracks.audioTrack?.stop();
    }
    setIsMuted(!isMuted);
  };

  const toggleVideo = () => {
    // if (isVideoStopped) {
    //   if (localVideoRef.current && localTracks.videoTrack) {
    //     localTracks.videoTrack.play(localVideoRef.current);
    //   }
    // } else {
    //   localTracks.videoTrack?.stop();
    // }
    setIsVideoStopped(!isVideoStopped);
  };

  const endStream = async () => {
    await client.leave();
    localTracks.audioTrack?.stop();
    localTracks.videoTrack?.stop();
    setLocalTracks({ videoTrack: null, audioTrack: null });
  };

  return {
    onStartStreamClick,
    videoTrack: localTracks.videoTrack,
    audioTrack: localTracks.audioTrack,
    toggleMute,
    toggleVideo,
    endStream,
    isMuted,
    isVideoStopped,
  };
};
