import MediaPlayer from "@/components/stream/MediaPlayer";
import useAgora from "@/helper/useAgoraR";
import React from "react";

const watchStreams = () => {
  const { remoteUsers, volumeIndicator, stopStreaming } = useAgora();

  return (
    <div className="w-full">
      {remoteUsers.map((user) => (
        <div className="remote-player-wrapper" key={user.uid}>
          <p className="remote-player-text">{`remoteVideo(${user.uid})`}</p>
          <MediaPlayer
            videoTrack={user.videoTrack}
            audioTrack={user.audioTrack}
            uid={user.uid}
            volumeIndicator={volumeIndicator}
          ></MediaPlayer>
        </div>
      ))}
    </div>
  );
};

export default watchStreams;
