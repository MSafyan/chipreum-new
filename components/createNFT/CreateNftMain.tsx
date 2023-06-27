import nftExploreData from "@/data/nftExploreData";
import NftCard from "../cards/NftCard";
import UploadFile from "./UploadFile";

const CreateNftMain = () => {
  return (
    <div className="w-full flex flex-wrap sm:flex-nowrap gap-8 sm:gap-3 xl:gap-6">
      <div className="w-full lg:w-7/12 xl:w-9/12">
        {/* Upload File */}
        <UploadFile />
      </div>
      <div className="w-full lg:w-5/12 xl:w-3/12">
        <h6 className="text-2xl leading-[150%] font-bold dark:text-white text-[var(--color-gray-6)] mb-5 sm:mb-6">
          Preivew Item
        </h6>

        {/* Nft Card */}
        <NftCard data={nftExploreData[0]} />
      </div>
    </div>
  );
};

export default CreateNftMain;
