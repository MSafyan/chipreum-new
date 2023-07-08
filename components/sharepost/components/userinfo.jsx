import Link from "next/link";

function UserInfo({ to, avatar, fullname }) {
  return (
    <div className="user-info">
      <div className="media">
        <Link href={to} className="user-img">
          <img
            src={avatar}
            className="img-fluid lazyload bg-img"
            alt="user"
            crossorigin="anonymous"
          />
        </Link>
        <div className="media-body">
          <Link href={to}>
            <h5>{fullname}</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
