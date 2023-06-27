import { useRouter } from "next/router";
import { useEffect } from "react";
import ActiveTab from "./ActiveTab";
import ExecutableTab from "./ExecutableTab";
import OffChainTab from "./OffChainTab";
import Past8Tab from "./Past8Tab";

const ProposalsMain = () => {
  const router = useRouter();

  const { view } = router.query;

  useEffect(() => {
    router.push("?view=active");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-start flex-wrap gap-4 justify-between mb-6">
        <div className="cls">
          <h4 className="text-2xl leading-[130%] text-[var(--color-gray-6)] dark:text-white font-semibold">
            You have 100 votes
          </h4>
          <div className="flex items-center gap-4 sm:gap-5 border border-[rgba(111,118, 126, 0.19)] dark:border-[#3C4145] rounded-lg py-1 px-2 mt-5">
            <button
              type={"button"}
              className={`text-center text-sm leading-[150%] p-2 ${
                view === "active"
                  ? "text-[#F8FAFC] bg-[var(--color-primary)] rounded-lg"
                  : ""
              }`}
              onClick={() => router.push("?view=active")}
            >
              Active
            </button>
            <button
              type={"button"}
              className={`text-center text-sm leading-[150%] p-2 ${
                view === "off-chain"
                  ? "text-[#F8FAFC] bg-[var(--color-primary)] rounded-lg"
                  : ""
              }`}
              onClick={() => router.push("?view=off-chain")}
            >
              Off-Chain
            </button>
            <button
              type={"button"}
              className={`text-center text-sm leading-[150%] p-2 ${
                view === "executable"
                  ? "text-[#F8FAFC] bg-[var(--color-primary)] rounded-lg"
                  : ""
              }`}
              onClick={() => router.push("?view=executable")}
            >
              Executable
            </button>
            <button
              type={"button"}
              className={`text-center text-sm leading-[150%] p-2 ${
                view === "past-8"
                  ? "text-[#F8FAFC] bg-[var(--color-primary)] rounded-lg"
                  : ""
              }`}
              onClick={() => router.push("?view=past-8")}
            >
              Past 8
            </button>
          </div>
        </div>
        <button
          type={"button"}
          className="text-center text-lg leading-[150%] text-[#F8FAFC] bg-[var(--color-primary)] rounded-lg py-2 px-3"
        >
          Create a new proposal
        </button>
      </div>

      {view === "active" ? <ActiveTab /> : ""}
      {view === "off-chain" ? <OffChainTab /> : ""}
      {view === "executable" ? <ExecutableTab /> : ""}
      {view === "past-8" ? <Past8Tab /> : ""}
    </div>
  );
};

export default ProposalsMain;
