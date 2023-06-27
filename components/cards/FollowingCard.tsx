import Image, { StaticImageData } from "next/image";

type PropeType = {
  data: {
    id: number | string;
    followers: number;
    following: number;
    name: string;
    img: StaticImageData;
  };
};

const FollowingCard = ({ data }: PropeType) => {
  const { followers, following, id, img, name } = data;

  return (
    <div className="w-full min-[1190px]:w-[273px] text-center bg-white dark:bg-[--color-gray-6] rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.25)] py-5 px-4">
      <Image
        src={img}
        alt="following_1"
        className="w-20 h-20 rounded-full m-auto"
      />

      <div className="text-center mt-5">
        <h6 className="font-semibold text-base leading-[130%] text-[var(--color-gray-6)] dark:text-white">
          {name}
        </h6>
        <div className="flex items-center justify-center mt-2">
          <span className="text-sm leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
            {followers}K followers
          </span>
          <span className="text-sm leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
            {following}K following
          </span>
        </div>
        <button
          type={"button"}
          className="px-3 py-2 bg-[var(--color-primary)] text-white rounded-lg mt-5"
        >
          Follow
        </button>
      </div>
    </div>
  );
};

export default FollowingCard;
