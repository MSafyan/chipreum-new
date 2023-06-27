import Image from "next/image";
import btc from "/public/images/icon/btc.png";
import tenx from "/public/images/icon/tenx.png";

const CollapseDetails = () => {
  return (
    <div className="clss">
      <div className="flex flex-col gap-4 py-5 mt-5 border border-x-0 border-[rgba(111,118,126,0.18)]">
        <div className="flex items-center justify-between text-sm">
          <span className="leading-[150%] text-[var(--color-gray-4)]">
            TX ID
          </span>
          <span className="leading-[150%] text-[var(--color-primary)]">
            cdy122..444
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="leading-[150%] text-[var(--color-gray-4)]">
            Status
          </span>
          <div className="flex items-center">
            <span className="material-symbols-outlined !text-[var(--color-primary-2)] !text-sm">
              check
            </span>
            <span className="leading-[150%] text-[var(--color-primary-2)] font-bold">
              Confirmed
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-[var(--color-gray-4)]">
          <span className="leading-[150%]">Order Route</span>
          <span className="leading-[150%]">Osmosis</span>
        </div>
        <div className="flex items-center justify-between text-sm text-[var(--color-gray-4)]">
          <span className="leading-[150%]">Transaction Type</span>
          <span className="leading-[150%]">Trade</span>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <div className="flex items-center justify-between text-sm text-[var(--color-gray-4)]">
          <span className="leading-[150%]">Transfers</span>
          <span className="leading-[150%] w-5 h-5 rounded-full bg-[var(--color-gray-4)] text-white flex items-center justify-center">
            2
          </span>
        </div>
        <div className="flex flex-col gap-3 px-5 py-3 rounded bg-[var(--color-gray-3)] dark:bg-[var(--color-gray-6)]">
          <div className="text-sm flex flex-col">
            <span className="leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-2)]">
              From
            </span>
            <span className="leading-[150%] text-[var(--color-primary)]">
              cdy122..ddfd
            </span>
          </div>

          <div className="text-sm flex flex-col">
            <span className="leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-2)]">
              To
            </span>
            <span className="leading-[150%] text-[var(--color-primary)]">
              cdy122..dfdfsd
            </span>
          </div>

          <div className="text-sm flex flex-col">
            <span className="leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-2)]">
              For
            </span>
            <div className="flex items-center gap-2">
              <Image src={btc} alt="btc" className="flex-shrink-0 w-3 h-3" />
              <span className="leading-[150%] text-[var(--color-gray-7)] dark:text-[var(--color-gray-2)]">
                1 BTC
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-5 py-3 rounded bg-[var(--color-gray-3)] dark:bg-[var(--color-gray-6)]">
          <div className="text-sm flex flex-col">
            <span className="leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-2)]">
              From
            </span>
            <span className="leading-[150%] text-[var(--color-primary)]">
              cdy122..ddfd
            </span>
          </div>

          <div className="text-sm flex flex-col">
            <span className="leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-2)]">
              To
            </span>
            <span className="leading-[150%] text-[var(--color-primary)]">
              cdy122..dfdfsd
            </span>
          </div>

          <div className="text-sm flex flex-col">
            <span className="leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-2)]">
              For
            </span>
            <div className="flex items-center gap-2">
              <Image src={tenx} alt="btc" className="flex-shrink-0 w-3 h-3" />
              <span className="leading-[150%] text-[var(--color-gray-7)] dark:text-[var(--color-gray-2)]">
                1 BTC
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapseDetails;
