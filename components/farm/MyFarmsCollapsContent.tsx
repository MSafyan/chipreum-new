const MyFarmsCollapsContent = () => {
  return (
    <>
      <div className="flex flex-col flex-1 gap-3">
        <div className="flex items-center justify-around text-xs leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
          <span>Available:</span>
          <span>0 LP ($0)</span>
        </div>
        <form>
          <div className="flex items-center justify-between gap-2 border dark:border-[var(--color-gray-7)] bg-[#F7F9FC] dark:!bg-[var(--color-gray-7)] rounded-[4px] px-2">
            <input
              type={"number"}
              className="w-full text-sm leading-[150%] text-[var(--color-gray-5)] dark:text-[var(--color-gray-3)] outline-none py-1 bg-[#F7F9FC] dark:!bg-[var(--color-gray-7)]"
              placeholder="0.0"
            />
            <span className="capitalize text-sm leading-[150%] text-[var(--color-primary)]">
              MAX
            </span>
          </div>
          <div className="block mt-3">
            <button
              type={"submit"}
              className="w-full p-2 rounded-lg bg-[var(--color-primary)] text-[#F8FAFC]"
            >
              Approve
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col flex-1 gap-3">
        <div className="flex items-center justify-around text-xs leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
          <span>Deposited:</span>
          <span>0 LP ($0)</span>
        </div>
        <form>
          <div className="flex items-center justify-between gap-2 border dark:border-[var(--color-gray-7)] bg-[#F7F9FC] dark:!bg-[var(--color-gray-7)] rounded-[4px] px-2">
            <input
              type={"number"}
              className="w-full text-sm leading-[150%] text-[var(--color-gray-5)] dark:text-[var(--color-gray-3)] outline-none py-1 bg-[#F7F9FC] dark:!bg-[var(--color-gray-7)]"
              placeholder="0.0"
            />
            <span className="capitalize text-sm leading-[150%] text-[var(--color-primary)]">
              MAX
            </span>
          </div>
          <div className="block mt-3">
            <button
              type={"submit"}
              className="w-full p-2 rounded-lg bg-[var(--color-primary)] text-[#F8FAFC]"
            >
              Unstake LP Tokens
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col flex-1 gap-3">
        <div className="flex items-center justify-around text-xs leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
          <span>Earned rewards:</span>
          <span>0 LP ($0)</span>
        </div>
        <form>
          <div className="flex items-center justify-between gap-2 border dark:border-[var(--color-gray-7)] bg-[#F7F9FC] dark:!bg-[var(--color-gray-7)] rounded-[4px] px-2">
            <input
              type={"number"}
              className="w-full text-sm leading-[150%] text-[var(--color-gray-5)] dark:text-[var(--color-gray-3)] outline-none py-1 bg-[#F7F9FC] dark:!bg-[var(--color-gray-7)]"
              placeholder="0.0"
            />
            <span className="capitalize text-sm leading-[150%] text-[var(--color-primary)]">
              MAX
            </span>
          </div>
          <div className="block mt-3">
            <button
              type={"submit"}
              className="w-full p-2 rounded-lg bg-[var(--color-primary)] text-[#F8FAFC]"
            >
              Claim
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyFarmsCollapsContent;
