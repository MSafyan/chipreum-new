import Image from "next/image";
import { useMemo } from "react";
import { Column, useTable } from "react-table";
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

type Data = {
  [key: string]: any;
};

interface Props {
  columns: Column<Data>[];
}

const LiquidityPoolsTable = () => {
  const data = useMemo(
    () => [
      {
        all: { icon1: tenx, icon2: btc },
        wmatic: "USDC/BTC",
        usdc: 2.44,
        volume: 8.367,
        apy: 42.04,
      },
      {
        all: { icon1: ethereum, icon2: tether },
        wmatic: "USDC/BTC",
        usdc: 2.44,
        volume: 8.367,
        apy: 42.04,
      },
      {
        all: { icon1: loopring, icon2: ripple },
        wmatic: "USDC/BTC",
        usdc: 2.44,
        volume: 8.367,
        apy: 42.04,
      },
      {
        all: { icon1: monero, icon2: doge },
        wmatic: "USDC/BTC",
        usdc: 2.44,
        volume: 8.367,
        apy: 42.04,
      },
      {
        all: { icon1: binance, icon2: litecoin },
        wmatic: "USDC/BTC",
        usdc: 2.44,
        volume: 8.367,
        apy: 42.04,
      },
    ],
    []
  );

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        Header: "All",
        accessor: "all",
      },
      {
        Header: "Wmatic",
        accessor: "wmatic",
      },
      {
        Header: "USDC",
        accessor: "usdc",
      },
      {
        Header: "24h Volume",
        accessor: "volume",
      },
      {
        Header: "APY",
        accessor: "apy",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="w-full">
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            key={i}
            className="border-b border-[var(--color-gray-3)] dark:border-[var(--color-gray-5)]"
          >
            {headerGroup.headers.map((column, i) => (
              <th
                {...column.getHeaderProps()}
                key={i}
                className="pb-2 md:pb-4 px-3 md:px-4 text-sm leading-[150%] text-black dark:text-white font-normal pr-9 last:pr-0 whitespace-nowrap"
              >
                <div className="flex items-center justify-start gap-1">
                  {column.render("Header")}
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          const { icon2, icon1 } = row.values.all;
          const { wmatic, usdc, volume, apy } = row.values;

          return (
            <tr
              {...row.getRowProps()}
              key={i}
              className="border-b dark:border-[var(--color-gray-5)]"
            >
              <td className="min-w-[120px] py-2 md:py-3 px-3 md:px-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Image src={icon1} alt="icon" className="flex-shrink-0" />
                  <Image
                    src={icon2}
                    alt="icon"
                    className="flex-shrink-0 -ml-3"
                  />
                </div>
              </td>

              <td className="min-w-[120px] py-2 md:py-3 px-3 md:px-4 whitespace-nowrap">
                <p className="text-sm leading-[150%] text-[var(--color-gray-6)] dark:text-[var(--color-gray-3)]">
                  {wmatic}
                </p>
              </td>

              <td className="min-w-[120px] py-2 md:py-3 px-3 md:px-4 whitespace-nowrap text-sm leading-[150%]">
                <p className="text-sm leading-[150%] text-[var(--color-gray-6)] dark:text-[var(--color-gray-3)]">
                  ${usdc}M
                </p>
              </td>

              <td className="min-w-[120px] py-2 md:py-3 px-3 md:px-4 whitespace-nowrap text-sm leading-[150%]">
                <p className="text-sm leading-[150%] text-[var(--color-gray-6)] dark:text-[var(--color-gray-3)]">
                  ${volume}M
                </p>
              </td>

              <td className="min-w-[120px] py-2 md:py-3 px-3 md:px-4 whitespace-nowrap text-sm leading-[150%]">
                <p className="text-sm leading-[150%] text-[var(--color-primary-2)] dark:text-[var(--color-primary-dark)]">
                  {apy}%
                </p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default LiquidityPoolsTable;
