import { useRef } from "react";

const UploadFile = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  function handleOpenImgUpload() {
    inputRef.current.click();
  }

  return (
    <>
      <h6 className="text-2xl leading-[150%] font-bold dark:text-white text-[var(--color-gray-6)]">
        Upload New file
      </h6>
      <form className="mt-5">
        <div className="text-center border border-dashed rounded-lg px-2 py-10 lg:py-[103px]">
          <span className="material-symbols-outlined !text-[var(--color-gray-6)] flex items-center justify-center dark:!text-white">
            cloud_upload
          </span>
          <h4 className="text-2xl leading-[150%] text-[var(--color-gray-5)] dark:text-white my-5">
            Drag and drop Files Here to Upload
          </h4>
          <span className="text-base leading-[150%] text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
            PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
          </span>
          <div className="mt-8">
            <button
              onClick={handleOpenImgUpload}
              className="px-3 py-2 bg-[var(--color-primary)] rounded-lg text-[#F8FAFC]"
            >
              Browse
            </button>
            <input
              required
              id="imgUpload"
              type="file"
              className="hidden"
              ref={inputRef}
            />
          </div>
        </div>

        <div className="clss mt-6">
          <label
            htmlFor="price"
            className="text-[var(--color-gray-5)] dark:text-white font-bold block"
          >
            Price (th)
          </label>
          <input
            required
            id="price"
            type={"number"}
            placeholder="Enter you price"
            className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#6F767E] mt-4 outline-none bg-transparent"
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="title"
            className="text-[var(--color-gray-5)] dark:text-white font-bold block"
          >
            Item Title
          </label>
          <input
            required
            id="title"
            type={"text"}
            placeholder="03.00 ETH"
            className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#6F767E] mt-4 outline-none bg-transparent"
          />
        </div>

        <div className="flex items-center gap-5 mt-5">
          <div className="w-1/2">
            <label
              htmlFor="royality"
              className="text-[var(--color-gray-5)] dark:text-white font-bold block"
            >
              Royality
            </label>
            <input
              required
              id="royality"
              type={"text"}
              placeholder="e. g. 20%"
              className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#6F767E] mt-4 outline-none bg-transparent"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="size"
              className="text-[var(--color-gray-5)] text-white font-bold block"
            >
              Size
            </label>
            <input
              required
              id="size"
              type={"text"}
              placeholder="e. g. Size"
              className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#6F767E] mt-4 outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="mt-5">
          <label
            htmlFor="description"
            className="text-[var(--color-gray-5)] dark:text-white font-bold block"
          >
            Description
          </label>
          <textarea
            id="description"
            placeholder="Provide a thorough description of your product."
            className="w-full p-3 border text-[#6F767E] dark:text-[var(--color-gray-3)] border-[#6F767E] border-opacity-40 rounded-lg placeholder:text-[#6F767E] mt-4 outline-none bg-transparent"
            rows={3}
          ></textarea>
        </div>

        <div className="flex items-center justify-between mt-4 sm:mt-8">
          <button className="px-3 py-2 bg-[var(--color-primary)] rounded-lg text-[#F8FAFC]">
            Create Item
          </button>
          <div className="flex items-center gap-2 sm:gap-5">
            <button className="px-3 py-2 bg-[var(--color-primary)] rounded-lg text-[#F8FAFC]">
              Preview
            </button>
            <button className="px-3 py-2 rounded-lg text-[var(--color-primary-3)] border border-[var(--color-primary-3)]">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UploadFile;
