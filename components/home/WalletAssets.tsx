import { useMemo } from "react";
import Table from "../common/Table";
import binance from "/public/images/icon/binance.png";
import btc from "/public/images/icon/btc.png";
import doge from "/public/images/icon/doge.png";
import ethereum from "/public/images/icon/ethereum.png";
import litecoin from "/public/images/icon/litecoin.png";
import loopring from "/public/images/icon/loopring.png";
import monero from "/public/images/icon/monero.png";
import ripple from "/public/images/icon/ripple.png";
import tenx from "/public/images/icon/tenx.png";
import tether from "/public/images/icon/tether.png";

const WalletAssets = () => {
  const data = useMemo(
    () => [
      {
        asset: { coin: "Dogecoin", coinSrt: "DOGE", icon: doge },
        balance: { balence: 70, coinBalance: "3,347.243142" },
        price: 14.81,
        priceChange: { rate: 7.91, incDecIcon: "chart_data" },
        allocation: 34.1,
      },
      {
        asset: { coin: "Monero", coinSrt: "XMR", icon: monero },
        balance: { balence: "1,500", coinBalance: "3,347.243142" },
        price: 8.99,
        priceChange: { rate: 34.1, incDecIcon: "chart_data" },
        allocation: 34.1,
      },
      {
        asset: { coin: "Tenx", coinSrt: "tenx", icon: tenx },
        balance: { balence: "1,200", coinBalance: "3,347.243142" },
        price: 11.7,
        priceChange: { rate: 31.29, incDecIcon: "chart_data" },
        allocation: 34.1,
      },
      {
        asset: { coin: "Ripple", coinSrt: "Xrp", icon: ripple },
        balance: { balence: 80, coinBalance: "3,347.243142" },
        price: 11.7,
        priceChange: { rate: 15.3, incDecIcon: "chart_data" },
        allocation: 34.1,
      },
      {
        asset: { coin: "Bitcoin", coinSrt: "BTC", icon: btc },
        balance: { balence: 360, coinBalance: "3,347.243142" },
        price: 5.22,
        priceChange: { rate: 6.3, incDecIcon: "chart_data" },
        allocation: 34.1,
      },
      {
        asset: { coin: "Tether", coinSrt: "USDT", icon: tether },
        balance: { balence: 160, coinBalance: "3,347.243142" },
        price: 8.99,
        priceChange: { rate: 6.82, incDecIcon: "chart_data" },
        allocation: 34.1,
      },
      {
        asset: { coin: "Ethereum", coinSrt: "ETH", icon: ethereum },
        balance: { balence: 250, coinBalance: "3,347.243142" },
        price: 17.84,
        priceChange: { rate: 61.29, incDecIcon: "chart_data" },
        allocation: 34.1,
      },
      {
        asset: { coin: "Litecoin", coinSrt: "LTC", icon: litecoin },
        balance: { balence: "14.81", coinBalance: "3,347.243142" },
        price: 6.48,
        priceChange: { rate: 3.19, incDecIcon: "chart_data" },
        allocation: 34.1,
      },
      {
        asset: { coin: "Binance", coinSrt: "BNB", icon: binance },
        balance: { balence: "8.99", coinBalance: "3,347.243142" },
        price: 8.18,
        priceChange: { rate: 2.1, incDecIcon: "chart_data" },
        allocation: 34.1,
      },
      {
        asset: { coin: "Loopring", coinSrt: "LRC", icon: loopring },
        balance: { balence: "6.48", coinBalance: "3,347.243142" },
        price: 9.48,
        priceChange: { rate: 5.22, incDecIcon: "chart_data" },
        allocation: 34.1,
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Asset",
        accessor: "asset",
      },
      {
        Header: "Balance",
        accessor: "balance",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Price Change",
        accessor: "priceChange",
      },
      {
        Header: "Allocation",
        accessor: "allocation",
      },
    ],
    []
  );

  return (
    <div className="overflow-y-auto p-6 bg-white dark:bg-[var(--color-gray-7)] rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.2)] mt-6">
      <h5 className="text-[20px] leading-[130%] text-[var(--color-gray-5)] dark:text-white pb-8 font-semibold">
        Wallet Assets
      </h5>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default WalletAssets;
