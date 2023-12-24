// components/ToggleSwitch.tsx
import React, { useState } from "react";

const ToggleSwitch: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"followers" | "following">(
    "followers"
  );

  return (
    <div className="bg-black p-4">
      <div className="flex space-x-4 ">
        <div
          className={`px-6 py-2 font-medium text-sm rounded transition-colors ${
            selectedTab === "followers"
              ? "text-red-400 text-white"
              : "text-gray-400 bg-transparent"
          }`}
          onClick={() => setSelectedTab("followers")}
        >
          Followers
        </div>
        <div
          className={`px-6 py-2 font-medium text-sm rounded transition-colors ${
            selectedTab === "following"
              ? "text-red-400 text-white"
              : "text-gray-400 bg-transparent"
          }`}
          onClick={() => setSelectedTab("following")}
        >
          Following
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
