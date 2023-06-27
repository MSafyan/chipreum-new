import { Dialog } from "@headlessui/react";

type SearchProps = {
  isOpen: boolean;
  setIsOpen: (a: boolean) => void;
};

const Search = ({ isOpen, setIsOpen }: SearchProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex items-start justify-center bg-gray-700 bg-opacity-60 backdrop-blur opacity-100 p-12">
        <Dialog.Panel className="w-full max-w-screen-md rounded-full border overflow-hidden bg-white">
          <form>
            <div className="flex items-center gap-2 px-5">
              <span className="material-symbols-outlined">search</span>
              <input
                type={"text"}
                placeholder="Search..."
                className="w-full outline-none py-2 bg-inherit"
              />
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Search;
