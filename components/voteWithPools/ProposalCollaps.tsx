import Link from "next/link";

const ProposalCollaps = () => {
  return (
    <>
      <hr className="my-6 dark:border-[#6F767E] border-opacity-20" />

      <div className="cls">
        <p className="text-lg leading-[150%] text-[var(--color-primary-6)]">
          Voter
        </p>
        <div className="mt-3">
          <span className="w-full block h-2 rounded bg-[var(--color-primary-2)] dark:bg-[var(--color-primary-dark)] border dark:border-black"></span>

          <div className="flex items-center justify-between gap-5 mt-3">
            <h4 className="flex items-end flex-wrap gap-1 sm:gap-3 text-lg sm:text-2xl leading-[150%] text-[var(--color-primary-2)] dark:text-[var(--color-primary-dark)]">
              Accepted
              <span className="text-sm leading-[150%]">136,617 (100%)</span>
            </h4>
            <h4 className="flex items-end justify-end flex-wrap gap-1 sm:gap-3 text-lg sm:text-2xl leading-[150%] text-[var(--color-primary-3)]">
              <span className="text-sm leading-[150%]">0 (0%)</span>
              Rejected
            </h4>
          </div>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-3 text-[var(--color-gray-6)] dark:text-[var(--color-gray-3)]">
            <p className="text-sm sm:text-lg leading-[150%] text-start">
              Voter
            </p>
            <p className="text-sm sm:text-lg leading-[150%] text-center">
              Voting weight
            </p>
            <p className="text-sm sm:text-lg leading-[150%] text-end">
              Decision
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:gap-3 mt-5">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-3 text-[var(--color-gray-6)]"
              >
                <Link
                  href="/"
                  className="flex items-center gap-2 text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]"
                >
                  <span className="text-sm leading-[150%] text-start">
                    0x8f59...
                  </span>
                  <span className="material-symbols-outlined -rotate-90 !text-base !text-[var(--color-gray-4)] dark:!text-[var(--color-gray-3)]">
                    south_east
                  </span>
                </Link>
                <span className="text-sm leading-[150%] text-center dark:text-[var(--color-gray-3)]">
                  25,772
                </span>
                <span className="text-sm leading-[150%] text-end dark:text-[var(--color-gray-3)]">
                  Decision
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="my-6 dark:border-[#6F767E] border-opacity-20" />

      <div className="cls">
        <p className="text-lg leading-[150%] font-bold text-[var(--color-primary-5)]">
          Description
        </p>
        <h6 className="text-base leading-[130%] font-semibold text-[var(--color-primary-6)] mt-7">
          TBR-Q1-2023 - PT Inc Protocol Team CORRECT ONE
        </h6>
        <div className="mt-5">
          <p className="text-base leading-[150%] text-[var(--color-primary-5)]">
            POOL drip will be extended until the end of October for the UNI,
            COMP, Dai, USDC, and SUSHI Ethereum pools. Increase the number of
            rewards and drips for the POOL pool.
          </p>
          <p className="text-base leading-[150%] text-[var(--color-primary-5)] my-4">
            Curabitur quis mi pharetra, tincidunt nulla ut, finibus eros.
            Integer faucibus quam in metus sodales, in blandit orci pharetra.
            Proin consequat efficitur rutrum. Aenean fringilla gravida eleifend.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Morbi egestas lorem odio, vitae tempor lacus
            facilisis quis. Aliquam a dui cursus dui accumsan scelerisque. Donec
            bibendum porta velit in dictum. Vivamus mollis metus non sagittis
            placerat. Aenean at ultrices ex, quis suscipit risus.
          </p>
          <p className="text-base leading-[150%] text-[var(--color-primary-5)]">
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Morbi egestas lorem odio, vitae tempor lacus
            facilisis quis. Aliquam a dui cursus dui accumsan scelerisque. Donec
            bibendum porta velit in dictum.
          </p>
        </div>
      </div>

      <hr className="my-6 dark:border-[#6F767E] border-opacity-20" />

      <div className="cls">
        <p className="text-lg leading-[150%] font-bold text-[var(--color-primary-5)] pb-2">
          Actions
        </p>
        {[...Array(5)].map((_, i) => (
          <div key={i}>
            <hr className="my-5 dark:border-[#6F767E] border-opacity-20" />

            <div className="cls">
              <p className="text-sm leading-[150%] text-[var(--color-primary-5)]">
                Actions: {i + 1}
              </p>
              <div className="flex flex-col gap-1 sm:gap-2 mt-3">
                <p className="flex items-start gap-3 text-lg leading-[150%] text-[var(--color-primary-5)]">
                  <span className="dark:text-white">Contract:</span>
                  <Link
                    href="/"
                    className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]"
                  >
                    <span className="break-all text-xs leading-[150%] text-start">
                      0x0cec1a9154ff802e7934fc916ed7ca50bde6844e
                    </span>
                    <span className="material-symbols-outlined -rotate-90 !text-base !text-[var(--color-gray-4)] ml-1 translate-y-1">
                      south_east
                    </span>
                  </Link>
                </p>
                <p className="flex items-start gap-3 text-lg leading-[150%] text-[var(--color-primary-5)]">
                  <span className="dark:text-white">Function:</span>
                  <Link
                    href="/"
                    className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]"
                  >
                    <span className="break-all text-xs leading-[150%] text-start">
                      transfer(address,uint256)
                    </span>
                    <span className="material-symbols-outlined -rotate-90 !text-base !text-[var(--color-gray-4)] ml-1 translate-y-1">
                      south_east
                    </span>
                  </Link>
                </p>
                <p className="flex items-start gap-3 text-lg leading-[150%] text-[var(--color-primary-5)]">
                  <span className="dark:text-white">Inputs:</span>
                  <Link
                    href="/"
                    className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]"
                  >
                    <span className="break-all text-xs leading-[150%] text-start">
                      0x000000000000000000000000392
                    </span>
                    <span className="material-symbols-outlined -rotate-90 !text-base !text-[var(--color-gray-4)] ml-1 translate-y-1">
                      south_east
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-5 dark:border-[#6F767E] border-opacity-20" />

      <div className="flex items-center gap-5 mt-6">
        <button
          type={"button"}
          className="text-center text-lg leading-[150%] text-[#F8FAFC] bg-[var(--color-primary)] rounded-lg py-2 px-3"
        >
          Accept
        </button>
        <button
          type={"button"}
          className="text-center text-lg leading-[150%] text-[#F8FAFC] bg-[var(--color-primary-3)] rounded-lg py-2 px-3"
        >
          Cancel
        </button>
      </div>
    </>
    // </div>
  );
};

export default ProposalCollaps;
