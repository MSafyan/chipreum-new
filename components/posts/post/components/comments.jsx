import { useState, useEffect, useRef } from "react";
import Comment from "./comment";
// import InputEmoji from 'react-input-emoji';
import { useRecoilValue } from "recoil";
import Api from "../../../../api/api";
import { getProfileMe } from "../../../../data/atom";
import EmojiPicker from "emoji-picker-react";
import { IconButton, Box, OutlinedInput } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import InputAdornment from "@mui/material/InputAdornment";
import { useTheme } from "next-themes";

function Comments({
  ownerId,
  postId,
  comments,
  commentsShow,
  setCommentsCount,
}) {
  const profileMe = useRecoilValue(getProfileMe);
  const [showEmoji, setShowEmoji] = useState(false);
  const [comment, setComment] = useState("");
  const [commentsArray, setComments] = useState([]);
  const { theme } = useTheme();

  const submitComment = async () => {
    setShowEmoji(false);
    if (comment && comment.trim() && comment.length > 0) {
      setComments((prev) => [
        ...prev,
        { comment, user: profileMe, createdAt: Date.now() },
      ]);
      setCommentsCount((prev) => prev + 1);

      const res = await Api.postComment({ postId, comment });
      if (res.status === 201) {
        setComment("");
      }
      await Api.sendSingleNotification({
        toId: ownerId,
        notification: `commented on your post`,
      });
    }
  };

  useEffect(() => {
    let isSubscribe = true;
    if (isSubscribe) {
      setComments(comments);
    }
    return () => (isSubscribe = false);
  }, [comments]);

  return (
    <div className="comment-section relative px-8 py-5">
      <div className={`comments ${commentsShow ? "block" : "hidden"} mb-5`}>
        {commentsArray &&
          commentsArray.map((item, i) => (
            <div key={i}>
              <Comment
                index={i}
                fullname={item.user?.fullname}
                avatar={item.user?.avatar}
                comment={item.comment}
                createdAt={item.createdAt}
              />
            </div>
          ))}
      </div>
      <div className="reply">
        <div className="search-input input-style input-lg icon-right">
          <Box sx={{ width: "100%" }}>
            <OutlinedInput
              onChange={(e) => {
                setComment(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") submitComment();
              }}
              value={comment}
              variant="outlined"
              sx={{
                width: "100%",
                backgroundColor: theme === "light" ? "#edf7fb" : undefined,
                color: theme === "light" ? "#333" : undefined, // Text color for light theme
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme === "light" ? "#b3d8e1" : undefined, // Border color for light theme
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme === "light" ? "#86b7c3" : undefined, // Border color on hover for light theme
                },
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setShowEmoji((prev) => !prev);
                    }}
                    edge="end"
                  >
                    <EmojiEmotionsIcon color={showEmoji ? "primary" : ""} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
          {showEmoji && (
            <EmojiPicker
              onEmojiClick={(e, emoji) => {
                setComment((prev) => prev + e.emoji);
              }}
              theme={theme}
              emojiStyle="google"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Comments;

{
  /* <InputEmoji
						ref={inputRef}
						value={comment}
						onChange={(e) => {
							setComment(e);
						}}
						onEnter={submitComment}
						placeholder='Write a comment...'
					/> */
}
