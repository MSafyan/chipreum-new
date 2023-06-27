import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import ProposalCollaps from "./ProposalCollaps";

const SingleProposal = () => {
  const [collapsed, setCollapsed] = useState(true);
  const router = useRouter();

  const { view } = router.query;

  function toggleCollapse() {
    setCollapsed(!collapsed);
  }

  return (
    <div
      className={`px-2 sm:px-7 py-5 rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.25)] bg-white ${
        collapsed ? "dark:bg-[#272B30]" : "dark:bg-transparent"
      } `}
    >
      <div className="cursor-pointer" onClick={toggleCollapse}>
        <div className="flex items-center justify-between">
          <h6 className="text-base leading-[130%] text-[var(--color-gray-6)] dark:text-white font-semibold">
            PTIP-85 Strengthening Protocol Owned Liquidity
          </h6>

          <div className="flex items-center justify-end flex-wrap gap-1 sm:gap-3">
            <p className="text-xs leading-[150%] text-[var(--color-gray-6)] dark:text-[var(--color-gray-3)]">
              Feb 24, 2023
            </p>
            <p className="flex items-center gap-1 text-xs leading-[150%] text-[var(--color-gray-6)] dark:text-[var(--color-gray-3)]">
              <span className="material-symbols-outlined !text-sm">
                offline_pin
              </span>
              Executed
            </p>
          </div>
        </div>

        <p className="text-sm leading-[150%] text-[var(--color-gray-6)] dark:text-[var(--color-gray-3)] mt-4">
          Proposal #62
        </p>

        <button
          type={"button"}
          className={`text-center text-lg leading-[150%] text-[#F8FAFC] bg-[var(--color-primary)] rounded-lg py-2 px-3 mt-3 sm:mt-7 ${
            !collapsed && "hidden"
          }`}
        >
          {view === "active" ? "Vote Now" : "View proposal"}
        </button>
      </div>

      {/* Proposal Collaps */}
      <motion.div
        className="content overflow-hidden"
        animate={{ height: collapsed ? 0 : "auto" }}
        transition={{ duration: 0.5 }}
      >
        {/* Proposal Collaps */}
        <ProposalCollaps />
      </motion.div>
    </div>
  );
};

export default SingleProposal;
