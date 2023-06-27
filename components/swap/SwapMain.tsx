import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Select from "../common/Select";
import btc from "/public/images/icon/btc.png";
import doge from "/public/images/icon/doge.png";
import ethereum from "/public/images/icon/ethereum.png";

const coins = [
  { id: 1, name: "BTC", icon: btc },
  { id: 2, name: "ethereum", icon: ethereum },
  { id: 3, name: "BTC", icon: btc },
  { id: 4, name: "doge", icon: doge },
];

const SwapMain = () => {
  const [swap, setSwap] = useState(false);

  const handleSwap = () => {
    setSwap(!swap);
  };

  return (
    <section className="w-full h-[77vh] sm:h-[100vh]">
      <div className="max-w-[504px] m-auto border dark:border-[#3C4145] py-5 px-4 sm:px-8 bg-white dark:bg-[var(--color-gray-7)] rounded-lg shadow-[0px_1px_1px_rgba(0,0,0,0.25)]">
        <div className="flex justify-between items-center gap-2 sm:gap-5 py-1 px-2 border border-[rgba(111,118, 126, 0.19)] dark:border-[#3C4145] rounded-lg">
          <Link
            href="/swap"
            className="text-center flex-1 text-[#F8FAFC] bg-[var(--color-primary)] rounded-lg p-2"
          >
            Swap
          </Link>
          <Link href="/liquidity" className="text-center flex-1">
            Liquidity
          </Link>
          <Link href="/vote" className="text-center flex-1">
            Vote
          </Link>
          <Link href="/" className="text-center flex-1">
            Charts
          </Link>
        </div>

        <hr className="my-5 dark:border-[#3C4145]" />

        <div className="flex items-center justify-between gap-2 relative">
          <div
            className={`w-[210px] border border-[rgba(111,118, 126, 0.19)] dark:border-[#3C4145] rounded-lg px-2 sm:px-5 py-2 sm:py-3 bg-white dark:bg-[var(--color-gray-6)] ${
              swap ? "order-1" : ""
            }`}
          >
            <div className="flex flex-col gap-1">
              <h6 className="text-sm leading-[150%] text-[var(--color-gray-5)] dark:text-[var(--color-gray-3)]">
                From
              </h6>
              <div className="flex items-center gap-2">
                <Image
                  src={btc}
                  alt="btc"
                  className="w-8 h-8 rounded-full overflow-hidden"
                />
                <div className="flex flex-col">
                  <h6 className="text-sm font-bold leading-[150%] text-[var(--color-gray-5)] dark:text-white">
                    BTC
                  </h6>
                  <span className="text-xs leading-[150%] text-[var(--color-gray-5)] dark:text-[var(--color-gray-4)]">
                    On Bitcoin
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            type={"button"}
            className="flex items-center justify-center w-7 sm:w-10 h-7 sm:h-10 rounded-full border border-[rgba(111,118, 126, 0.19)] dark:border-[#3C4145] absolute left-2/4 -translate-x-2/4 bg-white dark:bg-[var(--color-gray-6)]"
            onClick={handleSwap}
          >
            <span className="material-symbols-outlined text-[var(--color-gray-4)] !text-sm sm:!text-2xl">
              swap_horiz
            </span>
          </button>
          <div className="w-[210px] border border-[rgba(111,118, 126, 0.19)] dark:border-[#3C4145] rounded-lg px-2 sm:px-5 py-2 sm:py-3 bg-white dark:bg-[var(--color-gray-6)]">
            <div className="flex flex-col gap-1">
              <h6 className="text-sm leading-[150%] text-[var(--color-gray-5)] dark:text-[var(--color-gray-3)]">
                To
              </h6>
              <div className="flex items-center gap-2">
                <Image
                  src={ethereum}
                  alt="ethereum"
                  className="w-8 h-8 rounded-full overflow-hidden"
                />
                <div className="flex flex-col">
                  <h6 className="text-sm font-bold leading-[150%] text-[var(--color-gray-5)] dark:text-white">
                    ETH
                  </h6>
                  <span className="text-xs leading-[150%] text-[var(--color-gray-5)] dark:text-[var(--color-gray-4)]">
                    On Ethereum
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-3 dark:border-[#3C4145]" />

        <div className="cls">
          <h6 className="text-base font-semibold text-[var(--color-gray-5)] dark:text-white">
            Swap from
          </h6>
          <div className="flex items-center justify-between border dark:border-[#3C4145] px-2 sm:px-5 py-1 sm:py-3 rounded-lg mt-3 dark:bg-[var(--color-gray-6)]">
            <div className="min-w-[113px] relative">
              {/* Select */}
              <Select data={coins} />
            </div>
            <div className="flex flex-1 flex-col items-end border-l dark:border-[#3C4145]">
              <input
                type={"text"}
                className="w-full text-lg leading-[150%] text-right outline-none bg-transparent text-[var(--color-gray-5)] dark:text-white placeholder:text-[var(--color-gray-5)] dark:placeholder:text-[var(--color-gray-3)]"
                placeholder="0.0"
              />
              <span className="text-base leading-[150%] text-right outline-none text-[var(--color-gray-4)]">
                $0.0
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h6 className="text-base font-semibold text-[var(--color-gray-5)] dark:text-white">
            Swap to
          </h6>
          <div className="flex items-center justify-between border dark:border-[#3C4145] px-2 sm:px-5 py-1 sm:py-3 rounded-lg mt-3 dark:bg-[var(--color-gray-6)]">
            <div className="min-w-[113px]">
              {/* Select */}
              <Select data={coins} />
            </div>
            <div className="flex flex-1 flex-col items-end border-l dark:border-[#3C4145]">
              <input
                type={"text"}
                className="w-full text-lg leading-[150%] text-right outline-none bg-transparent text-[var(--color-gray-5)] dark:text-white placeholder:text-[var(--color-gray-5)] dark:placeholder:text-[var(--color-gray-3)]"
                placeholder="0.0"
              />
              <span className="text-base leading-[150%] text-right outline-none text-[var(--color-gray-4)]">
                $0.0
              </span>
            </div>
          </div>
        </div>

        <button className="w-full text-center text-lg leading-[150%] text-[#F8FAFC] bg-[var(--color-primary)] rounded-lg p-2 mt-8">
          Connect Wallet
        </button>
      </div>
    </section>
  );
};

export default SwapMain;
