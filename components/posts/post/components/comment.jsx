import ReactTimeAgo from "react-time-ago";
import Link from "next/link";

function Comment({ index, fullname, avatar, comment, createdAt }) {
  return (
    <div key={index} className="main-comment">
      <div className="flex items-start">
        <Link href="#" className="user-img">
          <img
            src={avatar}
            className="w-[45px] h-[45px] relative mr-2.5 rounded-[100%]"
            alt="user"
            crossorigin="anonymous"
          />
        </Link>
        <div className="media-body flex-1">
          <Link href="#">
            <h5>{fullname}</h5>
          </Link>
          <p>{comment}</p>
          {/* <ul className="comment-option">
                        <li><Link href="#">like (5)</Link></li>
                    </ul> */}
        </div>
        <div className="comment-time absolute right-0 top-0">
          <h6 className="text-[calc(11px_+_(13_-_11)_*_((100vw_-_320px)_/_(1920_-_320)))] text-[#ff6559] font-medium">
            <ReactTimeAgo date={createdAt} locale="en-US" />
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Comment;
