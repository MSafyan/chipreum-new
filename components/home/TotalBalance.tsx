import MultipleRadialbars from "../charts/MultipleRadialbars";

const TotalBalance = () => {
  return (
    <div className="bg-white dark:bg-[var(--color-gray-7)] rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.2)] py-6 text-center">
      {/* Multiple Radial bars */}
      <MultipleRadialbars />

      <div className="mt-3">
        <p className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-3)]">
          Total Balance
          <span className="uppercase text-[#F8FAFC] bg-[var(--color-primary)] rounded-lg px-2 py-1 ml-4">
            usdt
          </span>
        </p>
        <h2 className="text-[40px] leading-[120%] font-semibold text-[var(--color-gray-7)] dark:text-white mt-4">
          0.3475948
        </h2>
        <p className="text-2xl leading-[150%] text-[var(--color-primary-2)] dark:text-[var(--color-primary-dark)] mt-2">
          11,032.24 USD
        </p>

        <button
          type={"button"}
          className="text-[#F8FAFC] bg-[var(--color-primary)] px-3 py-2 rounded-lg mt-6"
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default TotalBalance;
