import useAgora from "@/helper/useAgoraR";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import MediaPlayer with SSR turned off
const DynamicMediaPlayer = dynamic(
  () => import("@/components/stream/MediaPlayer"),
  {
    ssr: false, // This ensures that the component is only rendered client-side
    loading: () => <p>Loading...</p>,
  }
);

const StreamScreen = () => {
  const {
    remoteUsers,
    volumeIndicator,
    localVideoTrack,
    localAudioTrack,
    publishingClient,
    test,
  } = useAgora();

  useEffect(() => {
    console.log("test", test);
  }, [test]);

  return (
    <div>
      <DynamicMediaPlayer
        videoTrack={localVideoTrack}
        audioTrack={localAudioTrack}
        uid={publishingClient?.uid}
        volumeIndicator={volumeIndicator}
      ></DynamicMediaPlayer>
      {remoteUsers.map((user) => (
        <div className="remote-player-wrapper" key={user.uid}>
          <p className="remote-player-text">{`remoteVideo(${user.uid})`}</p>
          <DynamicMediaPlayer
            videoTrack={user.videoTrack}
            audioTrack={user.audioTrack}
            uid={user.uid}
            volumeIndicator={volumeIndicator}
          ></DynamicMediaPlayer>
        </div>
      ))}
    </div>
  );
};

export default StreamScreen;
