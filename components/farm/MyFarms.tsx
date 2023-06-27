import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import myFarmTableData from "./farmData";
import MyFarmsCollapsContent from "./MyFarmsCollapsContent";

const MyFarms = () => {
  const [collapsed, setCollapsed] = useState("");
  const [active, setActive] = useState("my_farms");

  function toggleCollapse(value: any) {
    if (collapsed === value) {
      setCollapsed("");
    } else {
      setCollapsed(value);
    }
  }
  return (
    <div className="w-[828px] xl:w-[1428px] bg-white dark:bg-[var(--color-gray-7)] py-8 px-6">
      <div className="flex items-center flex-wrap justify-between gap-3 sm:gap-5 border-b dark:border-[#6F767E] dark:border-opacity-40 pb-6 md:pb-8 mb-6 md:mb-8">
        <div className="inline-flex items-center border dark:border-[#6F767E] dark:border-opacity-40 rounded-lg p-1">
          <button
            type={"button"}
            className={`px-3 py-2 rounded-lg ${
              active === "my_farms" &&
              "bg-[var(--color-primary)] text-white dark:text-[var(--color-gray-3)]"
            } text-sm leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] whitespace-nowrap`}
            onClick={() => setActive("my_farms")}
          >
            My Farms
          </button>
          <button
            type={"button"}
            className={`px-3 py-2 rounded-lg ${
              active === "quickswap_farms" &&
              "bg-[var(--color-primary)] text-white dark:text-[var(--color-gray-3)]"
            } text-sm leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] whitespace-nowrap`}
            onClick={() => setActive("quickswap_farms")}
          >
            Quickswap Farms
          </button>
          <button
            type={"button"}
            className={`px-3 py-2 rounded-lg ${
              active === "gamma_farms" &&
              "bg-[var(--color-primary)] text-white dark:text-[var(--color-gray-3)]"
            } text-sm leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] whitespace-nowrap`}
            onClick={() => setActive("gamma_farms")}
          >
            Gamma Farms
          </button>
        </div>

        <form>
          <div className="flex items-center rounded-lg overflow-hidden border border-[rgba(111, 118, 126, 0.4)] dark:border-gray-600 bg-white dark:bg-transparent px-3 py-1">
            <input
              type={"text"}
              className="text-xs leading-[150%] pe-2 py-2 outline-none bg-transparent dark:placeholder:text-[var(--color-gray-3)]"
              placeholder="Search"
            />
            <button type={"submit"} className="flex items-center">
              <span className="material-symbols-outlined !text-lg">search</span>
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-between mb-5">
        {["Pool", "TVL", "Rewards", "APR", ""].map((itm, i, arr) => (
          <div
            key={i}
            className="flex items-center justify-start text-sm leading-[150%] text-black dark:text-white font-normal whitespace-nowrap gap-1"
          >
            {itm}
            {i !== arr.length - 1 ? (
              <span className="material-symbols-outlined !text-sm !text-[var(--color-gray-5)] dark:text-white">
                unfold_more
              </span>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      {myFarmTableData.map((itm, i) => {
        const { tvl, rewards, apr, btn, pool_title } = itm;
        const { icon2, icon1 } = itm.pool;
        return (
          <div
            className={`bg-white dark:bg-[var(--color-gray-6)] shadow-[0px_1px_2px_rgba(0,0,0,0.2)] mt-4 rounded-lg px-5 ${
              collapsed == `collapse${i}`
                ? "py-6 border border-[var(--color-primary)]"
                : ""
            }`}
            key={i}
          >
            <div
              className={`flex justify-between gap-5 py-2 md:py-3 ${
                collapsed == `collapse${i}`
                  ? "shadow-[0px_1px_0px_rgba(0,0,0,0.2)] mb-3"
                  : ""
              }`}
              onClick={() => toggleCollapse(`collapse${i}`)}
            >
              <div className="min-w-[120px] whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <div className="flex items-center flex-shrink-0">
                    <Image src={icon1} alt="icon" className="flex-shrink-0" />
                    <Image
                      src={icon2}
                      alt="icon"
                      className="flex-shrink-0 -ml-2"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm leading-[150%] text-[var(--color-gray-5)] dark:text-[var(--color-gray-3)]">
                      {pool_title}
                    </p>
                    <p className="flex items-center gap-1 text-sm leading-[150%] text-[var(--color-primary)]">
                      Get LP
                      <span className="material-symbols-outlined !text-base !text-[var(--color-primary)] -rotate-[105deg]">
                        south_east
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="min-w-[120px] whitespace-nowrap">
                <p className="text-sm leading-[150%] text-[var(--color-gray-5)] dark:text-[var(--color-gray-3)]">
                  {tvl}
                </p>
              </div>

              <div className="min-w-[120px] whitespace-nowrap text-sm leading-[150%]">
                <p className="text-sm leading-[150%] text-[var(--color-gray-5)] dark:text-[var(--color-gray-3)]">
                  {rewards} dUUIKK /day
                </p>
              </div>

              <div className="min-w-[120px] whitespace-nowrap text-sm leading-[150%]">
                <p className="text-sm leading-[150%] text-[var(--color-primary-2)] dark:text-[var(--color-gray-3)]">
                  {apr}%
                </p>
              </div>

              <div className="min-w-[120px] whitespace-nowrap text-sm leading-[150%]">
                <button
                  type={"button"}
                  name={btn + i}
                  className="flex items-center gap-2 text-sm font-bold leading-[150%] text-[var(--color-primary)]"
                >
                  Details
                  <motion.span
                    className="material-symbols-outlined !text-lg !text-[var(--color-primary)]"
                    animate={{ rotate: collapsed !== `collapse${i}` ? 0 : 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    expand_more
                  </motion.span>
                </button>
              </div>
            </div>

            <motion.div
              className="flex items-center justify-between gap-6 overflow-hidden"
              animate={{ height: collapsed !== `collapse${i}` ? 0 : "auto" }}
              transition={{ duration: 0.5 }}
            >
              {/* MyFarms Collaps Content */}
              <MyFarmsCollapsContent />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default MyFarms;
