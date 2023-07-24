import FeatherIcon from "feather-icons-react";

function CardTitle() {
  return (
    <div className="mb-2.5 flex items-center">
      <h3>Create Post</h3>
      <ul className="flex items-center">
        <li>
          <h5 className="text-sm sm:text-base flex items-center capitalize text-gray-500 font-medium ml-3">
            <span className="mx-1">
              <FeatherIcon icon="video" size={15} />
            </span>
            Go Live
          </h5>
        </li>
      </ul>
    </div>
  );
}

export default CardTitle;
