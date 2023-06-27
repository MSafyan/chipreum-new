import Image from "next/image";
import Link from "next/link";
import dollar from "/public/images/icon/dollar.png";
import message from "/public/images/icon/message.png";
import vote from "/public/images/icon/vote.png";

const VoteMain = () => {
  return (
    <section className="w-full h-[77vh] sm:h-[100vh]">
      <div className="flex items-center justify-center flex-wrap gap-3 md:gap-6">
        <div className="max-w-[504px] flex-auto sm:flex-1 bg-white dark:bg-[var(--color-gray-6)] py-5 px-4 sm:px-7 rounded-lg shadow-[0px_1px_1px_rgba(0,1,2,0.2)] text-center">
          <Image src={message} alt="message" className="flex-shrink-0 m-auto" />
          <h4 className="text-2xl leading-[130%] font-semibold text-[var(--color-gray-7)] dark:text-white mt-[6px]">
            Join the discussion
          </h4>
          <p className="text-lg leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] mt-2 w-[25ch] sm:w-[35ch] m-auto">
            Stay up to date and share thoughts with the community.
          </p>
          <div className="mt-4 sm:mt-8">
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
        <div className="max-w-[504px] flex-auto sm:flex-1 bg-white dark:bg-[var(--color-gray-6)] py-5 px-4 sm:px-7 rounded-lg shadow-[0px_1px_1px_rgba(0,1,2,0.2)] text-center">
          <Image src={vote} alt="vote" className="flex-shrink-0 m-auto" />
          <h4 className="text-2xl leading-[130%] font-semibold text-[var(--color-gray-7)] dark:text-white mt-[6px]">
            Vote on active proposals
          </h4>
          <p className="text-lg leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] mt-2 w-[25ch] sm:w-[35ch] m-auto">
            Vote with POOL tokens held in your wallet or delegated to you.
          </p>
          <div className="mt-4 sm:mt-8">
            <Link href="/" className="text-[var(--color-primary)]">
              Vote with POOL
            </Link>
          </div>
        </div>
        <div className="max-w-[504px] flex-auto sm:flex-1 bg-white dark:bg-[var(--color-gray-6)] py-5 px-4 sm:px-7 rounded-lg shadow-[0px_1px_1px_rgba(0,1,2,0.2)] text-center">
          <Image src={dollar} alt="dollar" className="flex-shrink-0 m-auto" />
          <h4 className="text-2xl leading-[130%] font-semibold text-[var(--color-gray-7)] dark:text-white mt-[6px]">
            Vote gas-free + earn rewards
          </h4>
          <p className="text-lg leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] mt-2 w-[25ch] sm:w-[35ch] m-auto">
            Efficient Governance and Benefits with POOL Deposits and pPOOL
            Tokens
          </p>
          <div className="mt-4 sm:mt-8">
            <Link href="/" className="text-[var(--color-primary)]">
              Vote with POOL
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoteMain;
