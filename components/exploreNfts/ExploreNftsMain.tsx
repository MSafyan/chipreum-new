import nftExploreData from "@/data/nftExploreData";
import NftCard from "../cards/NftCard";

const ExploreNftsMain = () => {
  return (
    <section className="w-full">
      <div className="flex items-center flex-wrap gap-6 justify-between">
        <h3 className="text-[32px] leading-[120%] font-semibold text-[var(--color-gray-7)] dark:text-white">
          Explore NFTs
        </h3>
        <div className="flex items-center flex-wrap gap-3 sm:gap-5">
          <form>
            <div className="flex items-center rounded-lg overflow-hidden border border-[rgba(111, 118, 126, 0.4)] dark:border-gray-600 bg-white dark:bg-transparent px-3 py-2">
              <input
                type={"text"}
                className="text-xs leading-[150%] pe-2 outline-none bg-transparent dark:placeholder:text-[var(--color-gray-3)]"
                placeholder="Ending: Latest"
              />
              <button type={"submit"} className="flex items-center">
                <span className="material-symbols-outlined !text-lg">
                  search
                </span>
              </button>
            </div>
          </form>

          <div className="flex items-center gap-3">
            <button className="px-4 sm:px-3 py-1 sm:py-2 rounded-lg border border-[var(--color-primary)] bg-[var(--color-primary)] text-[#F8FAFC]">
              All
            </button>
            <button className="px-4 sm:px-3 py-1 sm:py-2 rounded-lg text-[var(--color-gray-4)] border border-[var(--color-gray-4)]">
              Latest
            </button>
            <button className="px-4 sm:px-3 py-1 sm:py-2 rounded-lg text-[var(--color-gray-4)] border border-[var(--color-gray-4)]">
              Old
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 min-[567px]:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-6 mt-6 w-full">
        {nftExploreData.map((itm) => (
          // Nft Card
          <NftCard key={itm.id} data={itm} />
        ))}
      </div>
    </section>
  );
};

export default ExploreNftsMain;
