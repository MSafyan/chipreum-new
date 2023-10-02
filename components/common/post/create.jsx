import FeatherIcon from "feather-icons-react";
import { useTheme } from "next-themes";

export const InputDescription = ({ createPost, setInputHandle }) => {
  const { theme } = useTheme();

  // Set background color based on the theme
  const bgColor = theme === "light" ? "bg-[#edf7fb]" : "bg-gray-900";

  return (
    <div className="search-input input-style icon-right ">
      <input
        value={createPost.description}
        onChange={setInputHandle}
        type="text"
        name="description"
        autoComplete="off"
        className={`px-8 py-2 ${bgColor} border-none px-2 py-2 text-sm text-gray-400 rounded-md block w-full py-1 px-2 text-sm font-medium leading-6 text-gray-700 bg-gray-700 border border-gray-300 rounded-sm transition-all duration-150 w-full`}
        placeholder="write something here.."
      />
    </div>
  );
};

export const InputFile = ({ setInputHandle, acceptImages, acceptVideos }) => {
  return (
    <li className="cursor-pointer">
      <input
        onChange={setInputHandle}
        className="absolute left-0 w-full opacity-0"
        name="file"
        type="file"
        accept={[...acceptImages, ...acceptVideos]}
      />
      <h5 className="text-sm sm:text-base flex items-center">
        <FeatherIcon icon="image" size={14} />
        Photo/Video
      </h5>
    </li>
  );
};
