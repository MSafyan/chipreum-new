import { motion } from "framer-motion";
import { useState } from "react";
import LiquidityPoolsTable from "./LiquidityPoolsTable";

const LiquidityPools = () => {
  const [collapsed, setCollapsed] = useState(true);

  function toggleCollapse() {
    setCollapsed(!collapsed);
  }

  return (
    <div className="bg-white dark:bg-[var(--color-gray-7)] rounded-lg px-4 py-5 mt-5">
      <div
        className={`flex items-center justify-between cursor-pointer ${
          !collapsed ? "pb-5" : ""
        }`}
        onClick={toggleCollapse}
      >
        <p className="text-sm leading-[150%] font-bold">
          Liquidity Pools{" "}
          <span className="text-[var(--color-gray-4)] text-xs font-normal">
            (WMATIC, USDC)
          </span>
        </p>
        <motion.button
          animate={{ rotate: collapsed ? 0 : 180 }}
          transition={{ duration: 0.5 }}
        >
          <span className="material-symbols-outlined !text-lg">
            expand_more
          </span>
        </motion.button>
      </div>
      <motion.div
        className="overflow-hidden"
        animate={{ height: collapsed ? 0 : "auto" }}
        transition={{ duration: 0.5 }}
      >
        {/* Liquidity Pools Table */}
        <LiquidityPoolsTable />
      </motion.div>
    </div>
  );
};

export default LiquidityPools;
