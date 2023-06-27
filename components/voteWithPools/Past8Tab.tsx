import SingleProposal from "./SingleProposal";

const Past8Tab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
      <div className="flex flex-col gap-3 md:gap-6">
        {[...Array(4)].map((_, i) => (
          <SingleProposal key={i} />
        ))}
      </div>
      <div className="flex flex-col gap-3 md:gap-6">
        {[...Array(4)].map((_, i) => (
          <SingleProposal key={i} />
        ))}
      </div>
    </div>
  );
};

export default Past8Tab;
