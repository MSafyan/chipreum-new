import Image from "next/image";
import { Column, useTable } from "react-table";

type Data = {
  [key: string]: any;
};

interface Props {
  columns: Column<Data>[];
  data: Data[];
}

const Table: React.FC<Props> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="w-full">
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={i}>
            {headerGroup.headers.map((column, i) => (
              <th
                {...column.getHeaderProps()}
                key={i}
                className="pb-2 md:pb-4 text-sm leading-[150%] text-[var(--color-gray-5)] dark:text-white font-normal pr-9 last:pr-0 whitespace-nowrap"
              >
                <div className="flex items-center justify-start gap-1">
                  {column.render("Header")}
                  {i !== 0 ? (
                    <span className="material-symbols-outlined !text-sm text-[var(--color-gray-4)] dark:text-white">
                      unfold_more
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          const { coin, coinSrt, icon } = row.values.asset;
          const { balence, coinBalance } = row.values.balance;
          const { rate, incDecIcon } = row.values.priceChange;

          return (
            <tr {...row.getRowProps()} key={i}>
              <td className="min-w-[120px] py-2 md:py-3 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <Image src={icon} alt="icon" className="flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-sm leading-[150%]">{coin}</span>
                    <span className="text-xs leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-4)]">
                      {coinSrt}
                    </span>
                  </div>
                </div>
              </td>
              <td className="min-w-[120px] py-2 md:py-3 whitespace-nowrap">
                <div className="flex flex-col gap-y-1 md:gap-y-2">
                  <span className="text-sm leading-[150%]">${balence}</span>
                  <span className="text-xs leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
                    {coinBalance} {coinSrt}
                  </span>
                </div>
              </td>
              <td className="min-w-[120px] py-2 md:py-3 whitespace-nowrap text-sm leading-[150%]">
                ${row.values.price}
              </td>
              <td className="min-w-[120px] py-2 md:py-3 whitespace-nowrap">
                <div
                  className={`flex items-center gap-2 text-sm leading-[150%] ${
                    rate <= 6.99
                      ? "text-[var(--color-primary-3)]"
                      : "text-[var(--color-primary-2)] dark:text-[var(--color-primary-dark)]"
                  }`}
                >
                  <span className="material-symbols-outlined !text-xs !text-inherit">
                    {incDecIcon}
                  </span>
                  <span>{rate}%</span>
                </div>
              </td>
              <td className="min-w-[120px] py-2 md:py-3 whitespace-nowrap text-sm leading-[150%]">
                {row.values.allocation}%
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
