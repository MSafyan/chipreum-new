// import MediaPlayer from "@/components/stream/MediaPlayer";
// import useAgora from "@/helper/useAgoraO";
// import React, { useEffect } from "react";

// const StreamScreen = () => {
//   const {
//     remoteUsers,
//     volumeIndicator,
//     localVideoTrack,
//     localAudioTrack,
//     publishingClient,
//     test,
//     setTest,
//   } = useAgora();

//   useEffect(() => {
//     console.log("test", test);
//   }, [test]);

//   return (
//     <div>
//       <button onClick={() => setTest((p: boolean) => !p)}>
//         {test ? "true" : "false"}
//       </button>
//       <MediaPlayer
//         videoTrack={localVideoTrack}
//         audioTrack={localAudioTrack}
//         uid={publishingClient?.uid}
//         volumeIndicator={volumeIndicator}
//       ></MediaPlayer>
//       {remoteUsers.map((user) => (
//         <div className="remote-player-wrapper" key={user.uid}>
//           <p className="remote-player-text">{`remoteVideo(${user.uid})`}</p>
//           <MediaPlayer
//             videoTrack={user.videoTrack}
//             audioTrack={user.audioTrack}
//             uid={user.uid}
//             volumeIndicator={volumeIndicator}
//           ></MediaPlayer>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StreamScreen;

import MediaPlayer from "@/components/stream/MediaPlayer";
import useAgora from "@/helper/useAgoraR";
import React, { useEffect } from "react";

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
      <MediaPlayer
        videoTrack={localVideoTrack}
        audioTrack={localAudioTrack}
        uid={publishingClient?.uid}
        volumeIndicator={volumeIndicator}
      ></MediaPlayer>
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

export default StreamScreen;
