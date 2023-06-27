import Image, { StaticImageData } from "next/image";

type PropeType = {
  data: {
    id: number | string;
    desc: string;
    name: string;
    icon: string;
    avt: StaticImageData;
  };
};

const SingleNotification = ({ data }: PropeType) => {
  const { avt, desc, icon, id, name } = data;

  return (
    <div className="flex items-center gap-3 border-b last:border-b-0 border-[#6F767E] border-opacity-40 pb-2 md:pb-4 last:pb-0">
      <div className="inline-block relative">
        <Image src={avt} alt="img" className="w-10 h-10 rounded-full" />
        <div className="flex items-center justify-center w-4 h-4 rounded-full bg-[#111315] border border-white absolute -right-1 bottom-[2px]">
          <span className="material-symbols-outlined !text-xs !text-white">
            {icon}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h6 className="text-base leading-[150%] font-semibold text-[var(--color-gray-5)] dark:text-white">
          {name}
          <span className="text-sm leading-[150%] font-normal text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
            {" "}
            {desc}
          </span>
        </h6>
        <span className="text-xs leading-[150%] text-[var(--color-gray-4)]">
          4 hours ago
        </span>
      </div>
    </div>
  );
};

export default SingleNotification;
