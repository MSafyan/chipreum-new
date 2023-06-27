import Link from "next/link";
import RecentTransactionItms from "./RecentTransactionItms";

const RecentTransactions = () => {
  return (
    <div className="flex flex-col gap-6 bg-white dark:bg-[var(--color-gray-7)] rounded-lg p-3 md:p-6 mt-6">
      <div className="flex items-center justify-between">
        <h5 className="text-lg leading-[150%] font-bold">
          Recent Transactions
        </h5>
        <Link
          href="/"
          className="text-lg leading-[150%] text-[var(--color-primary)]"
        >
          View All
        </Link>
      </div>

      {/* Recent Transaction Itms */}
      <RecentTransactionItms />
    </div>
  );
};

export default RecentTransactions;
