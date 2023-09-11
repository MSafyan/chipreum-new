import React, { useState, useEffect, useRef } from "react";
import AgoraRTC, {
  ICameraVideoTrack,
  IMicrophoneAudioTrack,
} from "agora-rtc-sdk-ng";

const AgoraStreamComponent: React.FC = () => {
  const [client, setClient] = useState<any>(null);
  const localVideoRef = useRef<HTMLDivElement>(null);

  const [localTracks, setLocalTracks] = useState<{
    videoTrack: ICameraVideoTrack | null;
    audioTrack: IMicrophoneAudioTrack | null;
  }>({ videoTrack: null, audioTrack: null });

  useEffect(() => {
    const initAgora = async () => {
      const tempClient = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
      debugger;
      await tempClient.join(
        "604316ffbaa44ea087a4a9e85f2d441d",
        "test",
        "007eJxTYPBkP63iN/+syfkPoU2RmWd8J37e+39Zs5Oh8Z3QrjLDQm8FBjMDE2NDs7S0pMREE5PURAML80STRMtUC9M0oxQTE8OUJaG3UhoCGRnkhYSYGRkgEMRnYShJLS5hYAAATz0e4A==",
        0
      );
      setClient(tempClient);

      const [audioTrack, videoTrack] =
        await AgoraRTC.createMicrophoneAndCameraTracks();
      setLocalTracks({ audioTrack, videoTrack });

      if (localVideoRef.current) {
        videoTrack.play(localVideoRef.current);
      }
    };

    initAgora();

    return () => {
      // Cleanup on unmount
      localTracks.audioTrack?.close();
      localTracks.videoTrack?.close();
    };
  }, []);

  return (
    <div
      ref={localVideoRef}
      style={{ width: "640px", height: "360px", background: "#ddd" }}
    >
      {/* This is where your video stream should appear */}
    </div>
  );
};

export default AgoraStreamComponent;
