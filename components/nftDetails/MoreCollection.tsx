import nftExploreData from "@/data/nftExploreData";
import NftCard from "../cards/NftCard";

const MoreCollection = () => {
  return (
    <div className="mt-8 md:mt-3">
      <h6 className="text-2xl leading-[150%] font-bold text-[var(--color-gray-6)] dark:text-white ">
        More from this collection
      </h6>
      <div className="w-full grid grid-cols-1 min-[456px]:grid-cols-2 min-[1076px]:grid-cols-3 2xl:grid-cols-4 gap-3 xl:gap-6 mt-5">
        {nftExploreData.slice(0, 4).map((itm, i) => (
          <NftCard key={itm.id} data={itm} />
        ))}
      </div>
    </div>
  );
};

export default MoreCollection;
