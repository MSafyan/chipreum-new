import BalanceCard from "../cards/BalanceCard";
import RadialBar from "../charts/RadialBar";

const EarnBalance = () => {
  return (
    <BalanceCard balance="1208.73" title="Earn Balance">
      <div className="w-[52px] max-h-[52px] flex items-center justify-center">
        {/* Radial Bar */}
        <RadialBar lightColor="#0B6725" darkColor="#3bdc68" />
      </div>
    </BalanceCard>
  );
};

export default EarnBalance;
