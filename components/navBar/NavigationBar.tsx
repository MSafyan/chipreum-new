// components/NavigationBar.tsx
import React, { useState } from "react";
import PostSection from "../posts/postSection";
import ToggleSwitch from "./ToggleSwitch";
import { useRouter } from "next/router";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import useAgora from "@/helper/useAgoraR";

type NavigationLink = {
  name: string;
  path: string;
  disabled?: boolean;
  onClick?: () => void;
};

const NavigationBar: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const { onStartStreamClick, stopStreaming, publishingClient } = useAgora();

  const { user } = useSelector((state: RootState) => ({
    user: state.users.user?.user,
  }));

  const handleSelect = (link: NavigationLink) => {
    if (!link.disabled) {
      setSelected(link.name);
      if (link.onClick) {
        link.onClick();
      }
    }
  };

  const handleStartStopStream = async () => {
    if (publishingClient) {
      await stopStreaming();
    } else {
      await onStartStreamClick();
    }
  };

  const handleLiveStreamingClick = async () => {
    if (!user) {
      router.push("/login");
    } else {
      await handleStartStopStream();
      router.push("/stream-screen");
    }
  };

  const navigationLinks: NavigationLink[] = [
    { name: "Feed", path: "/" },
    {
      name: "Live Streaming",
      path: "/live",
      onClick: handleLiveStreamingClick,
    },
    { name: "Community", path: "/community" },
    { name: "Activity", path: "/activity", disabled: true },
    { name: "Buy $KEN", path: "/buy", disabled: true },
    { name: "Explore", path: "/explore", disabled: true },
    { name: "Create", path: "/create", disabled: true },
  ];

  return (
    <div>
      <div className="m-2 flex space-x-2 text-white p-4 bg-[#1c1c1c]">
        {navigationLinks.map((link) => (
          <div
            key={link.name}
            className={`relative group px-3 py-2 cursor-pointer ${
              selected === link.name ? "rounded" : "hover:bg-gray-600"
            } ${link.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => handleSelect(link)}
          >
            {link.name}
            {link.disabled && (
              <span className="absolute w-full bg-red-500 p-1 rounded text-xs text-center bottom-full mb-2 hidden group-hover:block">
                Disabled
              </span>
            )}
          </div>
        ))}
      </div>
      {selected === "Feed" && (
        <div className="ml-2 w-1/2">
          <PostSection />
        </div>
      )}
      {selected === "Community" && <ToggleSwitch />}
    </div>
  );
};

export default NavigationBar;
