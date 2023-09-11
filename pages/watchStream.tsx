import useAgora from "@/helper/useAgoraR";
import React from "react";
import dynamic from "next/dynamic";

// const DynamicMediaPlayer = dynamic(
//   () => import("@/components/stream/MediaPlayer"),
//   {
//     ssr: false, // This ensures that the component is only rendered client-side
//     loading: () => <p>Loading...</p>,
//   }
// );

const WatchStreams = () => {
  const { remoteUsers, volumeIndicator, stopStreaming } = useAgora();

  return (
    <div className="w-full">
      {remoteUsers.map((user) => (
        <div className="remote-player-wrapper" key={user.uid}>
          <p className="remote-player-text">{`remoteVideo(${user.uid})`}</p>
          {/* <DynamicMediaPlayer
            videoTrack={user.videoTrack}
            audioTrack={user.audioTrack}
            uid={user.uid}
            volumeIndicator={volumeIndicator}
          ></DynamicMediaPlayer> */}
        </div>
      ))}
    </div>
  );
};

export default WatchStreams;
