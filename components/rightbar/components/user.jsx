import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Tooltip } from "react-tippy";

function User({ id = "", fullname = "", avatar, filterUsersHandle }) {
  const router = useRouter();
  const username = fullname.split(" ")[0];

  const { user } = useSelector((state) => ({
    user: state.users.user,
  }));

  return (
    <li className="relative cursor-pointer mt-4" key={id}>
      <Tooltip title={fullname} position="left" trigger="mouseenter">
        <div className="items-center lg:flex lg:flex-wrap">
          <Link
            href={`/profile/${id}`}
            className="w-[45px] h-[45px] relative mr-4 rounded-[50px] lg:flex lg:flex-col"
          >
            <img
              crossorigin="anonymous"
              src={avatar}
              className="w-full h-full object-cover rounded-[50px]"
              alt="user"
            />
          </Link>
          <div className="flex-1 flex items-center justify-between">
            <h5 className="mb-1" onClick={() => router.push(`/profile/${id}`)}>
              {username}
            </h5>
            <button
              className="transition-all duration-[0.5s] ease-[ease] rounded-[5px] border-0 bg-gradient-to-l from-red-400 via-red-500 to-purple-500 text-white"
              onClick={() => {
                if (!user.user) return router.push("/login");
                filterUsersHandle(id);
              }}
            >
              Follow
            </button>
          </div>
        </div>
      </Tooltip>
    </li>
  );
}

export default User;
