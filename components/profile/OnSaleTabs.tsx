import nftExploreData from "@/data/nftExploreData";
import NftCard from "../cards/NftCard";

const OnSaleTabs = () => {
  return (
    <div className="flex items-center justify-center min-[600px]:justify-start flex-wrap gap-3 md:gap-6 mt-5">
      {nftExploreData.slice(0, 3).map((itm) => (
        // Nft Card
        <NftCard key={itm.id} data={itm} />
      ))}
    </div>
  );
};

export default OnSaleTabs;
