import Link from "next/link";
import ReactTimeAgo from "react-time-ago";
import PostSettings from "./postsettings";

function TitleBox({
  userId,
  setLoader,
  isAuth,
  postId,
  ownerImage,
  ownerName,
  createdAt,
}) {
  return (
    <div>
      <div className="profile">
        <div className="flex items-center px-8 py-4">
          <Link
            href={`/profile/${userId}`}
            className="w-[55px] h-[55px] relative mr-4 rounded-[100%]"
          >
            <img
              crossorigin="anonymous"
              src={ownerImage}
              className=" w-full h-full object-cover rounded-[50px]"
              alt="user"
            />
          </Link>
          <div className="media-body">
            <Link href={`/profile/${userId}`}>
              <h5>{ownerName}</h5>
            </Link>
            <h6>
              <ReactTimeAgo date={createdAt} locale="en-US" />
            </h6>
          </div>
        </div>
      </div>
      {isAuth && <PostSettings postId={postId} setLoader={setLoader} />}
    </div>
  );
}

export default TitleBox;
