import PriceChart from "../charts/PriceChart";

const Descriptions = () => {
  return (
    <div className="cls">
      <h6 className="text-2xl leading-[150%] font-bold text-[var(--color-gray-6)] dark:text-white">
        Descriptions
      </h6>
      <p className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-73)] mt-3">
        Mauris libero mi, condimentum at orci at, pulvinar faucibus turpis. Sed
        sem neque, fermentum ut mattis eu, condimentum ut magna. Maecenas nec
        tortor id augue sodales mollis id eu tellus. Fusce et leo odio. Nullam
        tempor tempor iaculis. Duis mauris est, fermentum id odio vitae, auctor
        euismod magna. Donec mollis cursus elit vitae posuere.
      </p>
      <div className="mt-6 rounded-lg overflow-hidden">
        <div className="flex items-center flex-wrap justify-between gap-3 bg-white dark:bg-[var(--color-gray-7)] px-3 xl:px-6 pt-5 pb-7">
          <h6 className="text-2xl leading-[150%] font-bold text-[var(--color-gray-6)] dark:text-white -mt-1">
            Price History
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

        {/* PriceChart */}
        <PriceChart />
      </div>
    </div>
  );
};

export default Descriptions;
