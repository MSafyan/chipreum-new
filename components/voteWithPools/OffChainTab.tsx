import Link from "next/link";
import ExecutableTab from "./ExecutableTab";

const OffChainTab = () => {
  return (
    <div className="h-[77vh] sm:h-[100vh] flex flex-col gap-6">
      <div className="max-w-[1032px] p-5 lg:p-10 bg-white dark:bg-[var(--color-gray-6)] shadow-[0px_1px_2px_rgba(0,0,0,0.25)] rounded-lg">
        <div className="flex flex-wrap items-center gap-3 md:gap-6">
          <h4 className="text-2xl leading-[130%] font-semibold text-[var(--color-gray-7)] dark:text-white -mt-1">
            There are no proposals at the moment
          </h4>
          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="flex items-center gap-2 text-[var(--color-primary)]"
            >
              Go to Snapshot
              <span className="material-symbols-outlined text-lg !text-inherit">
                directions
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-[var(--color-primary)]"
            >
              Learn more
              <span className="material-symbols-outlined text-lg !text-inherit">
                directions
              </span>
            </Link>
          </div>
        </div>
        <p className="text-lg leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] mt-6">
          SnapShot is a popular decentralized voting platform where users may
          vote on ideas and decisions using their coins. Nevertheless, in order
          to vote in SnapShot, you must have ptPOOL tokens. In this post,
          we&lsquo;ll look at how to get ptPOOL tokens by depositing POOL into
          the POOL Pool, and how they may enable you vote gas-free and win a
          weekly reward.
        </p>
      </div>
      {/* Executable Tab */}
      <ExecutableTab />
    </div>
  );
};

export default OffChainTab;
