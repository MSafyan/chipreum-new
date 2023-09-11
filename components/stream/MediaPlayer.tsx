import { volume } from "@/helper/useAgoraO";
import {
  ILocalVideoTrack,
  IRemoteVideoTrack,
  ILocalAudioTrack,
  IRemoteAudioTrack,
  UID,
} from "agora-rtc-sdk-ng";
import React, { useRef, useEffect, useState } from "react";
import { MdPlayArrow, MdPause, MdFullscreen } from "react-icons/md";
import Mic from "@mui/icons-material/Mic";

export interface VideoPlayerProps {
  videoTrack: ILocalVideoTrack | IRemoteVideoTrack | undefined | null;
  audioTrack: ILocalAudioTrack | IRemoteAudioTrack | undefined | null;
  uid: UID | undefined;
  volumeIndicator: Array<volume> | undefined;
}
const MediaPlayer = (props: VideoPlayerProps) => {
  const [activeSpeaker, setActiveSpeaker] = useState<volume | undefined>(
    undefined
  );
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(100);

  const togglePlayPause = () => {
    if (!props.videoTrack) return;

    if (isPlaying) {
      props.videoTrack.stop();
    } else {
      props.videoTrack.play(container.current);
    }

    setIsPlaying(!isPlaying);
  };

  const toggleFullScreen = () => {
    if (!container.current) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      container.current.requestFullscreen();
    }
  };

  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!container.current) return;
    if (!props.videoTrack) return;
    if (typeof props.videoTrack?.play === "function") {
      props.videoTrack.play(container.current);
    }
    return () => {
      if (typeof props.videoTrack?.stop === "function") {
        props.videoTrack?.stop();
      }
    };
  }, [container, props.videoTrack]);

  useEffect(() => {
    if (typeof props.audioTrack?.play === "function") {
      props.audioTrack?.play();
      props.audioTrack.setVolume(+volume);
    }
    return () => {
      if (typeof props.audioTrack?.stop === "function") {
        props.audioTrack?.stop();
      }
    };
  }, [props.audioTrack]);
  useEffect(() => {
    //clear active speaker indicator
    if (props.volumeIndicator === undefined)
      container.current?.classList.remove("active-speaker");
    props.volumeIndicator?.forEach((volume) => {
      if (
        !activeSpeaker ||
        (volume.level >= 3 && activeSpeaker.level < volume.level)
      ) {
        console.debug(
          `New active speaker, UID: ${volume.uid}, Level: ${volume.level}`
        );
        setActiveSpeaker(volume);
      }
      if (container.current?.id === `user-${activeSpeaker?.uid}`)
        container.current?.classList.add("active-speaker");
      else container.current?.classList.remove("active-speaker");
    });
  }, [props.volumeIndicator, activeSpeaker]);

  return (
    <div
      ref={container}
      id={`user-${props.uid}`}
      className="video-player relative bg-black"
      style={{ width: "50vw", height: "50vh" }}
    >
      {/* Video Controls */}
      <div className="absolute bottom-2 left-2 flex space-x-4">
        <button
          className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition ease-in-out duration-200 focus:outline-none"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <MdPause className="text-white" />
          ) : (
            <MdPlayArrow className="text-white" />
          )}
        </button>

        {/* <MdVolumeUp className="text-white self-center" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="w-24"
        /> */}

        <button
          className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition ease-in-out duration-200 focus:outline-none"
          onClick={toggleFullScreen}
        >
          <MdFullscreen className="text-white" />
        </button>
      </div>

      {/* Active Speaker */}
      {activeSpeaker && (
        <div className="absolute top-2 left-2 bg-red-500 text-white p-2 rounded-full">
          <Mic fontSize="small" />
        </div>
      )}
    </div>
  );
};

export default MediaPlayer;
