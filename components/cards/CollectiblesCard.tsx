import Image, { StaticImageData } from "next/image";

type PropeType = {
  data: {
    id: number | string;
    items: number;
    name: string;
    img: StaticImageData;
    avt: StaticImageData;
  };
};

const CollectiblesCard = ({ data }: PropeType) => {
  const { id, items, avt, img, name } = data;
  return (
    <div className="w-[372px] p-[12px_12px_20px] bg-white dark:bg-[--color-gray-6] rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.25)]">
      <div className="rounded-lg relative">
        <Image
          src={img}
          alt="collectibles_1"
          className="hover:scale-95 transition-all duration-500 ease-out"
        />

        <div className="w-10 h-10 overflow-hidden rounded-full border-[3px] border-white absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src={avt} alt="user_1" className="w-full" />
        </div>
      </div>
      <div className="mt-6">
        <h6 className="font-bold text-[var(--color-gray-5)] dark:text-[var(--color-gray-1)]">
          {name}
        </h6>
        <p className="text-xs text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] mt-1">
          {items} Artworks
        </p>
      </div>
    </div>
  );
};

export default CollectiblesCard;
