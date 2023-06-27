import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ProfileCard from "../cards/ProfileCard";
import CollectiblesTab from "./CollectiblesTab";
import FollowersTab from "./FollowersTab";
import FollowingTab from "./FollowingTab";
import OnSaleTabs from "./OnSaleTabs";
import banner from "/public/images/user/banner.png";

const ProfileMain = () => {
  const router = useRouter();

  const { view } = router.query;

  useEffect(() => {
    router.push("?view=on-sale");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full">
      <div className="w-full relative">
        <Image src={banner} alt="banner" className="w-full" />

        <div className="flex flex-row sm:flex-col lg:flex-row items-center gap-2 lg:gap-5 absolute right-5 xl:right-[160px] bottom-[45%] sm:bottom-5 lg:bottom-[60px]">
          <button
            type={"button"}
            className="px-3 py-2 bg-[var(--color-primary)] text-[#f8fafc] rounded-lg"
          >
            Edit cover photo
          </button>
          <button
            type={"button"}
            className="px-3 py-2 bg-[var(--color-primary)] text-[#f8fafc] rounded-lg"
          >
            Edit Profiel
          </button>
        </div>
      </div>

      <div className="flex flex-col min-[600px]:flex-row">
        {/* Profile Card */}
        <ProfileCard />

        <div className="w-full min-[600px]:w-6/12 lg:w-7/12 2xl:w-9/12 pl-2 md:pl-0 pr-2 md:pr-3 min-[1235px]:px-0">
          <div className="overflow-x-auto">
            <div className="inline-flex items-center border px-2 py-1 rounded-lg mt-6">
              <button
                type={"button"}
                className={`px-3 py-2 rounded-lg whitespace-nowrap ${
                  view === "on-sale" && "active"
                }`}
                onClick={() => router.push("?view=on-sale")}
              >
                On Sale
              </button>
              <button
                type={"button"}
                className={`px-3 py-2 rounded-lg ${
                  view === "collectibles" && "active"
                }`}
                onClick={() => router.push("?view=collectibles")}
              >
                Collectibles
              </button>
              <button
                type={"button"}
                className={`px-3 py-2 rounded-lg ${
                  view === "created" && "active"
                }`}
                onClick={() => router.push("?view=created")}
              >
                Created
              </button>
              <button
                type={"button"}
                className={`px-3 py-2 rounded-lg ${
                  view === "likes" && "active"
                }`}
                onClick={() => router.push("?view=likes")}
              >
                Likes
              </button>
              <button
                type={"button"}
                className={`px-3 py-2 rounded-lg ${
                  view === "following" && "active"
                }`}
                onClick={() => router.push("?view=following")}
              >
                Following
              </button>
              <button
                type={"button"}
                className={`px-3 py-2 rounded-lg ${
                  view === "followers" && "active"
                }`}
                onClick={() => router.push("?view=followers")}
              >
                Followers
              </button>
            </div>
          </div>

          {view === "on-sale" ? <OnSaleTabs /> : ""}
          {view === "collectibles" ? <CollectiblesTab /> : ""}
          {view === "following" ? <FollowingTab /> : ""}
          {view === "followers" ? <FollowersTab /> : ""}
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
