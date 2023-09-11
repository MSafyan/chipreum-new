import MediaPlayer from "@/components/stream/MediaPlayer";
import useAgora from "@/helper/useAgoraR";
import { getAllStreamsAction } from "@/store/actions/agoraAction";
import { RootState } from "@/store/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import Videocall from "./AgoraUtil";
import Image from "next/image";

const getDuration = (createdAt: any) => {
  const now = new Date();
  const created = new Date(createdAt);
  const diff = now - created; // Difference in milliseconds

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) {
    return `${days}d ${hours}h ago`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m ago`;
  } else {
    return `${minutes}m ago`;
  }
};

import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const Videocall = dynamic(() => import("./AgoraUtil"), {
  ssr: false,
});

const Streams = () => {
  const { onJoinStreamSubscriber } = useAgora();
  useEffect(() => {
    const fetchAllStreams = async () => {
      try {
        await getAllStreamsAction();
      } catch (error) {
        console.error("Failed to get all streams:", error);
      }
    };

    fetchAllStreams();
  }, []);

  const router = useRouter();

  const { streams } = useSelector((state: RootState) => ({
    streams: state.agora.streams,
  }));

  if (!streams?.length) return;
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {streams?.map((stream, i: number) => {
          const formattedDate = new Date(stream.createdAt).toLocaleDateString(); // Converts ISO date to more readable format

          return (
            <div
              className="bg-gray-800 p-2 rounded shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={async () => {
                await onJoinStreamSubscriber(stream.owner._id);
                router.push("/watchStream");
              }}
            >
              <div className="relative pb-56.25 w-auto h-[100px] overflow-hidden rounded-t">
                {/* The thumbnail can be an image, for now, just a placeholder */}
                <Image
                  src={stream.owner?.coverUrl || ""}
                  alt="avt"
                  className="w-full"
                  fill
                />

                {/* Red Live Tag */}
                <span className="absolute top-2 right-2 bg-[var(--color-primary)] text-white text-xs px-2 py-1 rounded">
                  LIVE
                </span>

                {/* Red Play Icon at the center of the thumbnail */}
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[var(--color-primary)] text-4xl">
                  ▶
                </span>
              </div>

              <div className="p-4">
                <h4 className="font-bold">{stream.owner.fullname}</h4>
                <p className="text-sm text-gray-600">{formattedDate}</p>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-xs text-gray-500">
                    {getDuration(stream.createdAt)}
                  </p>
                  <div className="w-10 h-10 rounded-full overflow-hidden relative">
                    <Image
                      src={stream.owner?.avatar || ""}
                      alt="avt"
                      className="w-full"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Streams;
