import { Switch } from "@headlessui/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import logo from "/public/images/logo.png";
import logo_icon from "/public/images/logo_icon.png";
import { getProfileAction } from "@/store/actions/userAction";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { dootLink } from "@/config";

const SideBar = ({ showText, setShowText, openSidBar, setOpenSidBar }: any) => {
  const [enabled, setEnabled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [show, setShow] = useState(true);
  const [sideBarShow, setSideBarShow] = useState(false);
  var blocked = true;

  const { user, unseenNotification } = useSelector((state: RootState) => ({
    user: state.users.user,
    unseenNotification: state.notification.notifications.unSeen,
  }));

  // responsive check
  const responsive = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  // get router path
  const router = useRouter();
  const { route } = router;

  const onMouseOverHandler = () => {
    if (sideBarShow) {
      setShowText(true);
    }
  };

  const onMouseLeaveHandler = () => {
    if (sideBarShow) {
      setShow(true);
      setShowText(false);
    }
  };

  const onClickHandler = () => {
    setShow(true);
    setSideBarShow(!sideBarShow);
    setShowText(!showText);
  };

  const handleClick = () => {
    setTheme(theme === "dark" || theme === "system" ? "light" : "dark");
  };

  useEffect(() => {
    setEnabled(true);

    if (user.jwt) {
      getProfileAction();
    } else {
      router.push("/login");
    }
  }, []);

  if (!enabled) return null;

  return (
    <>
      {responsive && openSidBar ? (
        <div className="w-full bg-gray-950 bg-opacity-70 h-[100vh] fixed top-0 left-0 z-30"></div>
      ) : (
        ""
      )}

      <motion.section
        className={`fixed left-0 top-0 z-30 container overflow-y-scroll lg:overflow-auto ${
          showText ? "w-[212px] 2xl:w-[312px]" : "w-auto"
        } border dark:border-[var(--color-dark)] bg-white dark:bg-[var(--color-gray-7)] px-6 pt-6 pb-10 ${
          openSidBar ? "block" : "hidden lg:block"
        }`}
        animate={{
          width: showText ? (responsive ? 212 : 312) : 150,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-[calc(100vh-65px)] flex flex-col justify-between">
          <div className="clss">
            <div className="flex items-center gap-10">
              <Link href="/">
                <Image
                  src={showText ? logo : logo_icon}
                  alt="logo"
                  className="flex-shrink-0"
                />
              </Link>
              <button type={"button"} onClick={onClickHandler}>
                <span className="material-symbols-outlined">menu_open</span>
              </button>
            </div>
            <div className="mt-[60px]">
              <ul>
                <li
                  className="pb-3"
                  onMouseOver={onMouseOverHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link
                    href="/"
                    className={`flex items-center gap-2 p-3 ${
                      showText ? "" : "justify-center"
                    } ${route === "/" ? "side-bar-active" : ""}`}
                    onClick={() => setOpenSidBar(false)}
                  >
                    <span className="material-symbols-outlined">cottage</span>
                    <span
                      className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                    >
                      {showText ? "Home" : ""}
                    </span>
                  </Link>
                </li>

                <li
                  className="pb-3"
                  onMouseOver={onMouseOverHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link
                    href={`${dootLink}/${user.jwt}`}
                    className={`flex items-center gap-2 p-3  ${
                      showText ? "" : "justify-center"
                    }`}
                    onClick={() => setOpenSidBar(false)}
                  >
                    <span className="material-symbols-outlined">message</span>
                    <span
                      className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                    >
                      {showText ? "Messages" : ""}
                    </span>
                  </Link>
                </li>
                <li
                  className="pb-3"
                  onMouseOver={onMouseOverHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link
                    href="/notifications"
                    className="flex items-center gap-2 p-3 text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]"
                    onClick={() => setOpenSidBar(false)}
                  >
                    <span className="material-symbols-outlined">
                      notifications
                    </span>
                    Notifications
                    {unseenNotification > 0 && (
                      <span className="inline-flex items-center justify-center px-2 py-1 ml-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                        {unseenNotification}
                      </span>
                    )}
                  </Link>
                </li>

                <li
                  className="pb-3"
                  onMouseOver={onMouseOverHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link
                    href={"/profile"}
                    className={`flex items-center gap-2 p-3 ${
                      showText ? "" : "justify-center"
                    } ${route === "/profile" ? "side-bar-active" : ""}`}
                    onClick={() => setOpenSidBar(false)}
                  >
                    <span className="material-symbols-outlined">
                      account_circle
                    </span>
                    <span
                      className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                    >
                      {showText ? "Profile" : ""}
                    </span>
                  </Link>
                </li>
                <li
                  className="pb-3"
                  onMouseOver={onMouseOverHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link
                    href={"/login"}
                    className={`flex items-center gap-2 p-3 ${
                      showText ? "" : "justify-center"
                    } ${route === "/login" ? "side-bar-active" : ""}`}
                    onClick={() => setOpenSidBar(false)}
                  >
                    <span className="material-symbols-outlined">logout</span>
                    <span
                      className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                    >
                      {showText ? "Logout" : ""}
                    </span>
                  </Link>
                </li>
                <h4 className="my-2">Comming Soon</h4>
                <li
                  className="pb-3"
                  onMouseOver={onMouseOverHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link
                    href={blocked ? "#" : "/farm"}
                    className={`flex items-center gap-2 p-3 cursor-not-allowed ${
                      showText ? "" : "justify-center"
                    } ${route === "/farm" ? "side-bar-active" : ""}`}
                    onClick={() => setOpenSidBar(false)}
                  >
                    <span className="material-symbols-outlined">dns</span>
                    <span
                      className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                    >
                      {showText ? "Farm" : ""}
                    </span>
                  </Link>
                </li>
                <li
                  className="pb-3"
                  onMouseOver={onMouseOverHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link
                    href={blocked ? "#" : "/swap"}
                    className={`flex items-center gap-2 p-3 cursor-not-allowed ${
                      showText ? "" : "justify-center"
                    } ${route === "/swap" ? "side-bar-active" : ""}`}
                    onClick={() => setOpenSidBar(false)}
                  >
                    <span className="material-symbols-outlined">
                      swap_horiz
                    </span>
                    <span
                      className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                    >
                      {showText ? "Swap" : ""}
                    </span>
                  </Link>
                </li>
                <li
                  className="pb-3"
                  onMouseOver={onMouseOverHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link
                    href={blocked ? "#" : "/liquidity"}
                    className={`flex items-center gap-2 p-3 cursor-not-allowed ${
                      showText ? "" : "justify-center"
                    } ${route === "/liquidity" ? "side-bar-active" : ""}`}
                    onClick={() => setOpenSidBar(false)}
                  >
                    <span className="material-symbols-outlined">
                      hourglass_empty
                    </span>
                    <span
                      className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                    >
                      {showText ? "Liquidity" : ""}
                    </span>
                  </Link>
                </li>
                <li
                  className="pb-3"
                  onMouseOver={onMouseOverHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link
                    href={blocked ? "#" : "/explore-nfts"}
                    className={`flex items-center gap-2 p-3 cursor-not-allowed ${
                      showText ? "" : "justify-center"
                    } ${route === "/explore-nfts" ? "side-bar-active" : ""}`}
                    onClick={() => setOpenSidBar(false)}
                  >
                    <span className="material-symbols-outlined">explore</span>
                    <span
                      className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                    >
                      {showText ? "Explore NFTs" : ""}
                    </span>
                  </Link>
                </li>
                <li
                  className="pb-3"
                  onMouseOver={onMouseOverHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link
                    href={blocked ? "#" : "/create-nft"}
                    className={`flex items-center gap-2 p-3 cursor-not-allowed ${
                      showText ? "" : "justify-center"
                    } ${route === "/create-nft" ? "side-bar-active" : ""}`}
                    onClick={() => setOpenSidBar(false)}
                  >
                    <span className="material-symbols-outlined">
                      add_circle
                    </span>
                    <span
                      className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                    >
                      {showText ? "Create NFT" : ""}
                    </span>
                  </Link>
                </li>
                <li
                  className="pb-3"
                  onMouseOver={onMouseOverHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link
                    href={blocked ? "#" : "/nft-details"}
                    className={`flex items-center gap-2 p-3 cursor-not-allowed ${
                      showText ? "" : "justify-center"
                    } ${route === "/nft-details" ? "side-bar-active" : ""}`}
                    onClick={() => setOpenSidBar(false)}
                  >
                    <span className="material-symbols-outlined">
                      domain_verification
                    </span>
                    <span
                      className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                    >
                      {showText ? "NFT Details" : ""}
                    </span>
                  </Link>
                </li>

                <li
                  className={`flex flex-col cursor-not-allowed   ${
                    showText ? "justify-between" : "justify-center"
                  }`}
                  onMouseOver={onMouseOverHandler}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Link
                    href="#"
                    className={`flex items-center p-3 ${
                      showText ? "justify-between" : "justify-center"
                    } ${route === "/vote" ? "side-bar-active" : ""}`}
                    onClick={() => setShow(!show)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined">
                        how_to_vote
                      </span>
                      <span
                        className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%] -mb-[3px] ${
                          showText ? "block" : "hidden"
                        }`}
                      >
                        {showText ? "Vote" : ""}
                      </span>
                    </div>
                    <span
                      className={`material-symbols-outlined -mb-[2px] ${
                        showText ? "block" : "hidden"
                      }`}
                    >
                      expand_more
                    </span>
                  </Link>
                  <ul
                    className={`flex flex-col gap-4 ml-4 cursor-not-allowed  mt-4 overflow-hidden ${
                      show ? "max-h-0" : "max-h-48"
                    } transition-[max-height] duration-200 ease-in`}
                  >
                    <li>
                      <Link
                        href={blocked ? "#" : "/vote"}
                        className="flex cursor-not-allowed  items-center gap-4 text-[var(--color-gray-4)] font-semibold text-base leading-[130%] before:h-1 before:w-1 before:rounded-full before:bg-[var(--color-gray-4)] hover:translate-x-2 transition duration-200 ease-linear"
                        onClick={() => setOpenSidBar(false)}
                      >
                        Explore
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={blocked ? "#" : "/vovote-with-poolste"}
                        className="flex cursor-not-allowed  items-center gap-4 text-[var(--color-gray-4)] font-semibold text-base leading-[130%] before:h-1 before:w-1 before:rounded-full before:bg-[var(--color-gray-4)] hover:translate-x-2 transition duration-200 ease-linear"
                        onClick={() => setOpenSidBar(false)}
                      >
                        Vote with pools
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 mt-10">
            <span className="material-symbols-outlined dark:text-white">
              light_mode
            </span>

            <Switch
              checked={enabled}
              onChange={handleClick}
              className={`${
                theme === "light" ? "border-[#1C1B1F]" : "border-[#fff]"
              } relative inline-flex h-[20px] w-[40px] shrink-0 rounded-full border-2 border-[#1C1B1F] transition-colors duration-200 ease-in-out`}
            >
              <span className="sr-only">Use Setting</span>
              <span
                aria-hidden="true"
                className={`${
                  theme !== "light"
                    ? "translate-x-[20px] bg-[#fff]"
                    : "translate-x-0 bg-[#1C1B1F]"
                } pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out`}
              ></span>
            </Switch>
            <span className="material-symbols-outlined dark:text-white">
              dark_mode
            </span>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default SideBar;
