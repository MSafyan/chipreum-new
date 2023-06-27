import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

const Select = ({ data }: any) => {
  const [selected, setSelected] = useState(data[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mr-5">
        <Listbox.Button className="flex items-center relative w-full text-sm font-bold text-[var(--color-gray-5)] dark:text-white uppercase">
          <Image src={selected?.icon} alt="icon" />
          <span className="pl-2 pr-5">{selected?.name}</span>
          <span className="material-symbols-outlined">expand_more</span>
        </Listbox.Button>
        <Transition as={Fragment}>
          <Listbox.Options className="absolute mt-1 w-auto text-sm overflow-auto rounded-lg bg-white dark:bg-[#3C4145] py-1 px-4 shadow-lg border dark:dark:border-[#3C4145] uppercase z-[1]">
            {data.map((itm: any) => (
              <Listbox.Option key={itm.id} value={itm} className="py-1">
                {({ selected }) => (
                  <span className={selected ? "font-semibold uppercase" : ""}>
                    {itm.name}
                    {selected}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Select;
