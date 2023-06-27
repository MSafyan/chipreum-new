import TotalBalance from "../home/TotalBalance";
import SingleProposal from "./SingleProposal";

const ActiveTab = () => {
  return (
    <div className="w-full flex flex-col 2xl:flex-row gap-10 2xl:gap-6">
      <div className="w-full 2xl:w-9/12">
        {/* @TODO: */}
        <div className="flex flex-col gap-3 2xl:gap-6">
          {[...Array(5)].map((_, i) => (
            // Single Proposal
            <SingleProposal key={i} />
          ))}
        </div>
      </div>
      <div className="w-full 2xl:w-3/12">
        <TotalBalance />
      </div>
    </div>
  );
};

export default ActiveTab;
