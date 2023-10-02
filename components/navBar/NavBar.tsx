import Image from "next/image";
import Link from "next/link";
import logo_icon from "/public/images/logo_icon.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { dootLink } from "@/config";
import useAgora from "@/helper/useAgoraR";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// import dynamic from "next/dynamic";
// const useAgora = dynamic(() => import("@/helper/useAgoraO"), {
//   ssr: false,
// });

type NavbarProps = {
  openSidBar: boolean;
  isOpen?: boolean;
  setIsOpen: (a: boolean) => void;
  setOpenSidBar: (a: boolean) => void;
};

const NavBar = ({
  isOpen,
  setIsOpen,
  setOpenSidBar,
  openSidBar,
}: NavbarProps) => {
  const router = useRouter();

  const { onStartStreamClick, stopStreaming, publishingClient } = useAgora();

  const { user, jwt } = useSelector((state: RootState) => ({
    user: state.users.user?.user,
    jwt: state.users.user?.jwt,
  }));

  const handleStartStopStream = async () => {
    if (publishingClient) {
      await stopStreaming();
    } else {
      await onStartStreamClick();
    }
  };

  return (
    <nav className="sticky top-0 left-0 z-50 px-2 lg:px-10 shadow-[0px_1px_2px_rgba(0,0,0,0.2)] py-3 md:py-[19px] bg-white dark:bg-[var(--color-gray-7)]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex lg:hidden items-center gap-4">
            <Link href="/">
              <Image src={logo_icon} alt="logo" />
            </Link>
            <button type={"button"} onClick={() => setOpenSidBar(!openSidBar)}>
              <span className="material-symbols-outlined">menu_open</span>
            </button>
          </div>
          <button
            type={"button"}
            className="flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3 md:gap-6">
            <Link href={!user ? "/login" : `${dootLink}/${jwt}`}>
              <button
                type={"button"}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-[var(--color-gray-5)] shadow-[0px_0px_12px_rgba(101,90,90,0.15)]"
              >
                <span className="material-symbols-outlined dark:!text-white">
                  message
                </span>
              </button>
            </Link>
            <button
              type={"button"}
              className="flex items-center justify-center text-lg leading-[150%] text-[#F8FAFC] bg-[var(--color-primary)] px-3 py-2 rounded-lg"
              onClick={async () => {
                if (!user) return router.push("/login");
                await handleStartStopStream();
                router.push("/stream-screen");
              }}
            >
              {publishingClient ? "Stop Streaming" : " Start Streaming"}
            </button>
          </div>
          <Link
            href="/profile?view=on-sale"
            className="hidden sm:flex items-center gap-2 px-3 py-2 bg-[var(--color-gray-3)] dark:bg-[var(--color-gray-5)] rounded-lg cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden relative">
              <Image
                src={user?.avatar || ""}
                alt="avt"
                className="w-full"
                fill
              />
            </div>
            <div className="flex flex-col">
              <h6 className="text-base font-bold">{user?.username}</h6>
              <div className="flex items-center gap-1 text-[#6F767E]">
                {user?.fullname}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
