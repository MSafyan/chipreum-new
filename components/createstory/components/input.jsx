import FeatherIcon from "feather-icons-react";

function Input({ setInputHandle, acceptImages }) {
  return (
    <ul className="create-btm-option -ml-1 mt-2.5 -mb-2">
      <li>
        <input
          id="fileInput"
          onChange={setInputHandle}
          className="choose-file"
          name="file"
          required
          type="file"
          accept={acceptImages}
          style={{ display: "none" }} // Hide the input field
        />
        <h5
          onClick={() => document.getElementById("fileInput")?.click()}
          className="flex  items-center text-[#b7b7b7] capitalize font-medium cursor-pointer"
        >
          <FeatherIcon icon="image" size={14} />
          Photo
        </h5>
      </li>
    </ul>
  );
}

export default Input;
