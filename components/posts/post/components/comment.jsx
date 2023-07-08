import ReactTimeAgo from "react-time-ago";
import Link from "next/link";

function Comment({ index, fullname, avatar, comment, createdAt }) {
  return (
    <div key={index} className="main-comment">
      <div className="media">
        <Link href="#" className="user-img">
          <img
            src={avatar}
            className="img-fluid lazyload bg-img"
            alt="user"
            crossorigin="anonymous"
          />
        </Link>
        <div className="media-body">
          <Link href="#">
            <h5>{fullname}</h5>
          </Link>
          <p>{comment}</p>
          {/* <ul className="comment-option">
                        <li><Link href="#">like (5)</Link></li>
                    </ul> */}
        </div>
        <div className="comment-time">
          <h6>
            <ReactTimeAgo date={createdAt} locale="en-US" />
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Comment;
