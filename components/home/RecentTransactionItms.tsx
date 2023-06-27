import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import CollapseDetails from "../common/CollapseDetails";
import btc from "/public/images/icon/btc.png";
import doge from "/public/images/icon/doge.png";
import jpcoin from "/public/images/icon/jpcoin.png";
import mcoin from "/public/images/icon/mcoin.png";
import tenx from "/public/images/icon/tenx.png";
import trx from "/public/images/icon/trx.png";

const RecentTransactionItms = () => {
  const [collapsed, setCollapsed] = useState("");

  function toggleCollapse(value: any) {
    if (collapsed === value) {
      setCollapsed("");
    } else {
      setCollapsed(value);
    }
  }

  return (
    <>
      <div
        className={`${
          collapsed == "collapseOne" && "bg-[rgba(17,19,21,0.03)] py-6 px-3"
        } flex flex-col rounded-lg`}
      >
        <div
          className="w-full cursor-pointer"
          onClick={() => toggleCollapse("collapseOne")}
        >
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <div className="w-5 h-5 rounded-full bg-[var(--color-gray-4)] flex items-center justify-center">
                  <span className="material-symbols-outlined !text-white !text-xs">
                    swap_horiz
                  </span>
                </div>
                <h6 className="text-sm leading-[150%] font-bold dark:text-white">
                  Trade
                </h6>
              </div>
              <p className="text-xs leading-[150%] text-[var(--color-gray-4)]">
                02/17/2023 4:27 PM
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <div className="flex items-center">
                    <Image src={btc} alt="icon 1" className="flex-shrink-0" />
                    <Image
                      src={tenx}
                      alt="icon 1"
                      className="-ml-4 flex-shrink-0"
                    />
                  </div>
                  <h6 className="text-base leading-[150%] font-semibold dark:text-white">
                    2 ATOM
                  </h6>
                </div>
                <p className="text-xs leading-[150%] text-[var(--color-gray-4)]">
                  $0.00
                </p>
              </div>

              <div className="cls">
                <span className="material-symbols-outlined text-sm leading-[150%] text-[var(--color-gray-4)]">
                  arrow_right_alt
                </span>
              </div>

              <div className="text-center">
                <div className="flex items-center gap-1">
                  <h6 className="text-base leading-[150%] font-semibold dark:text-white">
                    27.11111 OSMO
                  </h6>
                  <Image src={btc} alt="icon 1" className="flex-shrink-0" />
                </div>
                <p className="text-xs leading-[150%] text-[var(--color-gray-4)]">
                  $85.94
                </p>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="overflow-hidden"
          animate={{ height: collapsed !== "collapseOne" ? 0 : "auto" }}
          transition={{ duration: 0.5 }}
        >
          {/* Collapse Details */}
          <CollapseDetails />
        </motion.div>
      </div>

      <div
        className={`${
          collapsed === "collapseTwo" && "bg-[rgba(17,19,21,0.03)] py-6 px-3"
        } flex flex-col rounded-lg`}
      >
        <div
          className="w-full cursor-pointer"
          onClick={() => toggleCollapse("collapseTwo")}
        >
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <div className="w-5 h-5 rounded-full bg-[var(--color-gray-4)] flex items-center justify-center">
                  <span className="material-symbols-outlined !text-white !text-xs">
                    south_east
                  </span>
                </div>
                <h6 className="text-sm leading-[150%] font-bold dark:text-white">
                  Received
                </h6>
                <span
                  className="uppercase text-sm leading-[150%] text-[var(--color-primary)]
              bg-[rgba(42,133,255,0.1)] px-2"
                >
                  IBC
                </span>
              </div>
              <p className="text-xs leading-[150%] text-[var(--color-gray-4)]">
                02/17/2023 4:27 PM
              </p>
            </div>
            <div className="flex">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <div className="flex items-center">
                    <Image src={mcoin} alt="icon 1" className="flex-shrink-0" />
                    <Image
                      src={doge}
                      alt="icon 1"
                      className="-ml-4 flex-shrink-0"
                    />
                  </div>
                  <h6 className="text-base leading-[150%] font-semibold dark:text-white">
                    2 ATOM
                  </h6>
                </div>
                <p className="text-xs leading-[150%] text-[var(--color-gray-4)]">
                  $0.00
                </p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="overflow-hidden"
          animate={{ height: collapsed !== "collapseTwo" ? 0 : "auto" }}
          transition={{ duration: 0.5 }}
        >
          {/* Collapse Details */}
          <CollapseDetails />
        </motion.div>
      </div>

      <div
        className={`${
          collapsed === "collapseThree" && "bg-[rgba(17,19,21,0.03)] py-6 px-3"
        } flex flex-col rounded-lg`}
      >
        <div
          className="w-full cursor-pointer"
          onClick={() => toggleCollapse("collapseThree")}
        >
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <div className="w-5 h-5 rounded-full bg-[var(--color-gray-4)] flex items-center justify-center">
                  <span className="material-symbols-outlined !text-white !text-xs">
                    south_east
                  </span>
                </div>
                <h6 className="text-sm leading-[150%] font-bold dark:text-white">
                  Received
                </h6>
                <span
                  className="uppercase text-sm leading-[150%] text-[var(--color-primary)]
              bg-[rgba(42,133,255,0.1)] px-2"
                >
                  IBC
                </span>
              </div>
              <p className="text-xs leading-[150%] text-[var(--color-gray-4)]">
                02/17/2023 4:27 PM
              </p>
            </div>
            <div className="flex">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <div className="flex items-center">
                    <Image src={trx} alt="icon 1" className="flex-shrink-0" />
                    <Image
                      src={mcoin}
                      alt="icon 1"
                      className="-ml-4 flex-shrink-0"
                    />
                  </div>
                  <h6 className="text-base leading-[150%] font-semibold dark:text-white">
                    2 ATOM
                  </h6>
                </div>
                <p className="text-xs leading-[150%] text-[var(--color-gray-4)]">
                  $0.00
                </p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="overflow-hidden"
          animate={{ height: collapsed !== "collapseThree" ? 0 : "auto" }}
          transition={{ duration: 0.5 }}
        >
          {/* Collapse Details */}
          <CollapseDetails />
        </motion.div>
      </div>

      <div
        className={`${
          collapsed === "collapseFour" && "bg-[rgba(17,19,21,0.03)] py-6 px-3"
        } flex flex-col rounded-lg`}
      >
        <div
          className="w-full cursor-pointer"
          onClick={() => toggleCollapse("collapseFour")}
        >
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <div className="w-5 h-5 rounded-full bg-[var(--color-gray-4)] flex items-center justify-center">
                  <span className="material-symbols-outlined !text-white !text-xs">
                    south_east
                  </span>
                </div>
                <h6 className="text-sm leading-[150%] font-bold dark:text-white">
                  Received
                </h6>
                <span
                  className="uppercase text-sm leading-[150%] text-[var(--color-primary)]
              bg-[rgba(42,133,255,0.1)] px-2"
                >
                  IBC
                </span>
              </div>
              <p className="text-xs leading-[150%] text-[var(--color-gray-4)]">
                02/17/2023 4:27 PM
              </p>
            </div>
            <div className="flex">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <div className="flex items-center">
                    <Image
                      src={jpcoin}
                      alt="icon 1"
                      className="flex-shrink-0"
                    />
                    <Image
                      src={trx}
                      alt="icon 1"
                      className="-ml-4 flex-shrink-0"
                    />
                  </div>
                  <h6 className="text-base leading-[150%] font-semibold dark:text-white">
                    2 ATOM
                  </h6>
                </div>
                <p className="text-xs leading-[150%] text-[var(--color-gray-4)]">
                  $0.00
                </p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="overflow-hidden"
          animate={{ height: collapsed !== "collapseFour" ? 0 : "auto" }}
          transition={{ duration: 0.5 }}
        >
          {/* Collapse Details */}
          <CollapseDetails />
        </motion.div>
      </div>
    </>
  );
};

export default RecentTransactionItms;
