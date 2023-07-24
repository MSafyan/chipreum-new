import React from "react";
import FeatherIcon from "feather-icons-react";

function ReactionStats({ likes, comments, shareCount }) {
  return (
    <div className="flex px-[35px] py-[15px] border-y-[#333] border-t border-solid border-b justify-between">
      <div className="flex items-center">
        <h6>{likes} liked</h6>
      </div>
      <div className="right-stats">
        <ul className="flex items-center">
          <li>
            <h5>
              <span>{comments}</span> comment
            </h5>
          </li>
          <li className="ml-2">
            <h5>
              <span>{shareCount}</span> share
            </h5>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ReactionStats;
