import FeatherIcon from "feather-icons-react";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import Api from "../../../../api/api";
import { getProfileMe } from "../../../../data/atom";
import { Box } from "@mui/material";

function ReactionPanel({
  ownerId,
  postId,
  setLikesCount,
  commentsShow,
  setCommentsShow,
  likes,
  setShareModel,
}) {
  const profileMe = useRecoilValue(getProfileMe);
  const [liked, setLiked] = useState(false);

  const likesHandle = async () => {
    if (liked) {
      setLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikesCount((prev) => prev + 1);
      await Api.sendSingleNotification({
        toId: ownerId,
        notification: `liked your post`,
      });
    }
    await Api.postLike(postId);
  };

  useEffect(() => {
    let isSubscribe = true;
    if (isSubscribe) {
      likes.map((like) => {
        if (like === profileMe._id) {
          setLiked(true);
          return;
        }
      });
    }
    return () => (isSubscribe = false);
  }, []);

  return (
    <div className="bg-[rgb(16_16_16_/_50%)] p-3.5 border-b-[#101010] border-b border-solid">
      <ul className="flex items-center justify-around">
        <li className="react-btn">
          {!liked ? (
            <Like likesHandle={likesHandle} />
          ) : (
            <Liked likesHandle={likesHandle} />
          )}
        </li>
        <li className="comment-click">
          <div
            onClick={() => setCommentsShow(!commentsShow)}
            className="flex cursor-pointer items-center text-[#b7b7b7] capitalize font-medium"
          >
            <FeatherIcon icon="message-square" size={18} className="mr-2" />
            Comment
          </div>
        </li>
        <li onClick={() => setShareModel(true)}>
          <div className="flex cursor-pointer  items-center text-[#b7b7b7] capitalize font-medium">
            <FeatherIcon icon="share" size={16} className="mr-2" />
            Share
          </div>
        </li>
      </ul>
    </div>
  );
}

function Liked({ likesHandle }) {
  return (
    <Box
      className="flex items-center cursor-pointer  text-[#b7b7b7] capitalize font-medium"
      style={{ color: "#ff6559" }}
      onClick={likesHandle}
    >
      <FeatherIcon
        icon="thumbs-up"
        size={18}
        className="mr-2"
        style={{
          fill: "rgb(255 101 89)",
          stroke: "rgb(255 101 89 / 50%)",
        }}
      />
      Liked
    </Box>
  );
}

function Like({ likesHandle }) {
  return (
    <div
      className="flex items-center cursor-pointer  text-[#b7b7b7] capitalize font-medium"
      onClick={likesHandle}
    >
      <FeatherIcon icon="thumbs-up" size={18} className="mr-2" />
      Like
    </div>
  );
}

export default ReactionPanel;
