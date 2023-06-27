import Image from "next/image";
import bidHistoryData from "./bidHistory";

const Details = () => {
  return (
    <div className="clss">
      <h6 className="text-2xl leading-[150%] font-bold text-[var(--color-gray-6)] dark:text-white ">
        Details
      </h6>
      <p className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-3)] mt-3">
        Mauris libero mi, condimentum at orci at, pulvinar faucibus turpis. Sed
        sem neque, fermentum ut mattis eu, condimentum ut magna. Maecenas nec
        tortor id augue sodales mollis id eu tellus. Fusce et leo odio. Nullam
        tempor tempor iaculis. Duis mauris est, fermentum id odio vitae, auctor
        euismod magna. Donec mollis cursus elit vitae posuere.
      </p>
      <div className="mt-6 bg-white dark:bg-[var(--color-gray-7)] px-2 xl:px-6 py-5 rounded-lg">
        <div className="flex items-center flex-wrap justify-between gap-3">
          <h6 className="text-2xl leading-[150%] font-bold text-[var(--color-gray-6)] dark:text-white -mt-1">
            Bid History
          </h6>
          <div className="flex items-center flex-wrap gap-2 xl:gap-4">
            <button
              type={"button"}
              className="bg-[var(--color-primary)] p-2 rounded-lg text-white"
            >
              1 week
            </button>
            <button
              type={"button"}
              className="border text-[var(--color-gray-4)] border-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] dark:border-[var(--color-gray-3)] p-2 rounded-lg"
            >
              1 month
            </button>
            <button
              type={"button"}
              className="border text-[var(--color-gray-4)] border-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] dark:border-[var(--color-gray-3)] p-2 rounded-lg"
            >
              3 months
            </button>
            <button
              type={"button"}
              className="border text-[var(--color-gray-4)] border-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] dark:border-[var(--color-gray-3)] p-2 rounded-lg"
            >
              1 year
            </button>
            <button
              type={"button"}
              className="border text-[var(--color-gray-4)] border-[var(--color-gray-4)] dark:text-[var(--color-gray-3)] dark:border-[var(--color-gray-3)] p-2 rounded-lg"
            >
              3 years
            </button>
          </div>
        </div>
        <div className="mt-5 sm:mt-[51px] flex flex-col gap-5 overflow-x-auto">
          {bidHistoryData.map((itm) => (
            <div
              key={itm.id}
              className="min-w-[350px] sm:min-w-[400px] flex items-center justify-between whitespace-nowrap"
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <Image
                  src={itm.img}
                  alt="user_1"
                  className="w-8 h-8 rounded-full flex-shrink-0"
                />
                <p className="text-[var(--color-gray-7)] dark:text-white">
                  {itm.title} by {itm.bidBy}
                </p>
              </div>
              <span className="text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
                {itm.data}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
