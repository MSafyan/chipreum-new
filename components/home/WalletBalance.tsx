import BalanceCard from "../cards/BalanceCard";
import RadialBar from "../charts/RadialBar";

const WalletBalance = () => {
  return (
    <BalanceCard balance="994.78" title="Wallet Balance">
      <div className="w-[52px] max-h-[52px] flex items-center justify-center">
        {/* Radial Bar */}
        <RadialBar darkColor="#F44336" lightColor="#448aff" />
      </div>
    </BalanceCard>
  );
};

export default WalletBalance;
