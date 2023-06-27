import Image from "next/image";
import Link from "next/link";
import vote_hand from "/public/images/vote-hand.png";

const ExecutableTab = () => {
  return (
    <div className="h-[77vh] sm:h-[100vh]">
      <div className="w-full md:max-w-[1032px] flex flex-col sm:flex-row items-center justify-between p-5 lg:p-10 bg-white dark:bg-[var(--color-gray-6)] shadow-[0px_1px_2px_rgba(0,0,0,0.25)]">
        <div className="clss order-1 sm:order-0 mt-6 sm:mt-0">
          <h2 className="text-[40px] leading-[120%] font-semibold text-[var(--color-gray-7)] dark:text-white mt-[6px] w-auto xl:w-[25ch]">
            There are no proposals at the moment
          </h2>
          <div className="mt-4 md:mt-8">
            <p className="text-lg leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
              Visit our{" "}
              <Link href="/" className="text-[var(--color-primary)]">
                Forum
                <span className="material-symbols-outlined !text-[var(--color-primary)] -rotate-[105deg] !text-base">
                  south_east
                </span>
              </Link>
              or{" "}
              <Link href="/" className="text-[var(--color-primary)]">
                Discord
                <span className="material-symbols-outlined !text-[var(--color-primary)] -rotate-[105deg] !text-base">
                  south_east
                </span>
              </Link>
            </p>
          </div>
        </div>
        <Image
          src={vote_hand}
          alt="vote_hand"
          className="flex-shrink-0 order-0 sm:order-1"
        />
      </div>
    </div>
  );
};

export default ExecutableTab;
