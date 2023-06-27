import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import btc from "/public/images/icon/btc.png";
import verify from "/public/images/icon/verify.png";

type PropeType = {
  data: {
    id: number | string;
    deg: string;
    title: string;
    img: StaticImageData;
    avt: StaticImageData;
  };
};

const NftCard = ({ data }: PropeType) => {
  const { id, deg, title, img, avt } = data;

  return (
    <div className="bg-white dark:bg-[var(--color-gray-6)] rounded-lg p-3">
      <div className="rounded-lg relative">
        <Link href="/nft-details">
          <Image
            src={img}
            alt="nft_1"
            className="w-full rounded-lg hover:scale-95 transition-all duration-500 ease-out"
          />
        </Link>
        <div className="absolute right-5 -bottom-5 w-10 h-10 border-2 border-[var(--color-gray-5)] rounded-lg overflow-hidden">
          <Image src={avt} alt="user_1" className="flex-shrink-0" />
        </div>
        <div className="absolute bottom-5 left-3 flex items-center gap-2 p-1 bg-[#111315] bg-opacity-50 rounded-3xl">
          <Image src={btc} alt="btc" />
          <span className="mr-1 text-white">45.6 BTC</span>
        </div>
      </div>
      <div className="mt-7">
        <p className="flex items-center gap-3 text-base leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
          {deg}
          <Image src={verify} alt="verify" />
        </p>
        <Link href="/nft-details">
          <h6 className="font-bold text-[var(--color-gray-6)] dark:text-white mt-3">
            {title}
          </h6>
        </Link>
      </div>
      <div className="flex items-center justify-between mt-7">
        <button className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--color-gray-4)]">
          <span className="material-symbols-outlined !text-lg">favorite</span>
        </button>
        <Link
          href="/nft-details"
          className="px-3 py-2 text-center bg-[var(--color-primary)] text-[#F8FAFC] rounded-lg"
        >
          Place Bid
        </Link>
      </div>
    </div>
  );
};

export default NftCard;
