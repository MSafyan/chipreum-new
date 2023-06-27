type PropsType = {
  title: string;
  balance: string;
  children: any;
};

const BalanceCard = ({ title, balance, children }: PropsType) => {
  return (
    <div className="bg-white dark:bg-[var(--color-gray-7)] rounded-lg px-6 py-5 shadow-[0px_1px_2px_rgba(0,0,0,0.2)]">
      <div className="flex items-center flex-wrap gap-4">
        {/* Radial Bar */}
        {children}

        <div className="cls">
          <p className="dark:text-[var(--color-gray-3)]">{title}</p>
          <h4 className="font-semibold text-2xl leading-[130%] dark:text-white mt-1">
            ${balance}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
