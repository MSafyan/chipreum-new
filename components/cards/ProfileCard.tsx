import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Social from "../social/Social";
import copy from "/public/images/icon/copy.png";
import user_1 from "/public/images/user/user_1.png";
import user_2 from "/public/images/user/user_2.png";
import user_3 from "/public/images/user/user_3.png";
import user_4 from "/public/images/user/user_4.png";
import user_6 from "/public/images/user/user_6.png";
import user_7 from "/public/images/user/user_7.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ProfileCard = () => {
  const { user } = useSelector((state: RootState) => ({
    user: state.users.user?.user,
  }));

  return (
    <div className="w-full min-[600px]:w-6/12 lg:w-5/12 2xl:w-3/12 px-2 lg:px-6">
      <div className="px-4 lg:px-7 py-5 mx-0 bg-white dark:bg-[var(--color-gray-6)] shadow-[0px_1px_2px_rgba(0,0,0,0.2)] rounded-lg -translate-y-[15px] sm:-translate-y-[75px] lg:-translate-y-[150px]">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-[212px] h-[212px] rounded-full overflow-hidden">
            <Image src={user?.avatar || ""} fill alt="user_3" />
          </div>
          <h4 className="text-2xl leading-[130%] font-semibold text-[var(--color-gray-6)] dark:text-white mt-5">
            {user?.fullname}
          </h4>
          <p className="flex items-center gap-3 text-base leading-[150%] font-semibold text-[var(--color-gray-4)] dark:text-white mt-3">
            1bc9c17x649...b22x
            <button type={"button"}>
              <Image src={copy} alt="copy" />
            </button>
          </p>
          <p className="text-sm leading-[150%] text-[var(--color-gray-4)] dark:text-white w-[35ch] min-[1782px]:w-[40ch] mt-4">
            {user?.email}
          </p>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="text-center">
            <h6 className="text-base leading-[130%] text-[var(--color-gray-6)] dark:text-white font-semibold">
              {user?.followerss?.length}
            </h6>
            <p className="text-sm leading-[150%] text-[var(--color-gray-4)] dark:text-white mt-1">
              followers
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-base leading-[130%] text-[var(--color-gray-6)] dark:text-white font-semibold">
              {user?.followingss?.length}
            </h6>
            <p className="text-sm leading-[150%] text-[var(--color-gray-4)] dark:text-white mt-1">
              following
            </p>
          </div>
          <button className="py-2 px-3 bg-[var(--color-primary)] text-[#F8FAFC] rounded-lg">
            Follow
          </button>
        </div>
        {/* <hr className="border-dashed border-[var(--color-gray-4)] my-5" />
        <div className="clss">
          <h6 className="text-base leading-[130%] font-semibold text-[var(--color-gray-6)] dark:text-white">
            Followed by
          </h6>
          <div className="flex items-center mt-4">
            <Image
              src={user_3}
              alt="user"
              className="w-10 h-10 rounded-full outline outline-2 outline-[var(--color-primary-3)]"
            />
            <Image
              src={user_2}
              alt="user"
              className="w-10 h-10 rounded-full outline outline-2 outline-[var(--color-primary-3)] -ml-2"
            />
            <Image
              src={user_4}
              alt="user"
              className="w-10 h-10 rounded-full outline outline-2 outline-[var(--color-primary-3)] -ml-2"
            />
            <Image
              src={user_1}
              alt="user"
              className="w-10 h-10 rounded-full outline outline-2 outline-[var(--color-primary-3)] -ml-2"
            />
            <Image
              src={user_6}
              alt="user"
              className="w-10 h-10 rounded-full outline outline-2 outline-[var(--color-primary-3)] -ml-2"
            />
            <Image
              src={user_7}
              alt="user"
              className="w-10 h-10 rounded-full outline outline-2 outline-[var(--color-primary-3)] -ml-2"
            />
          </div>
        </div>
        <hr className="border-dashed border-[var(--color-gray-4)] my-5" />
        <div className="clss">
          <h6 className="text-base leading-[130%] font-semibold text-[var(--color-gray-6)] dark:text-white">
            BIO
          </h6>
          <p className="text-sm leading-[150%] text-[var(--color-gray-4)] dark:text-white mt-2">
            Nam congue gravida justo. Morbi sed rhoncus ipsum, nec ven.
          </p>
        </div>
        <hr className="border-dashed border-[var(--color-gray-4)] my-5" />
        <div className="clss">
          <h6 className="text-base leading-[130%] font-semibold text-[var(--color-gray-6)] dark:text-white">
            Social media
          </h6>
          <div className="">
            <Social
              items={[
                [FaFacebookF, "/"],
                [FaTwitter, "/"],
                [FaInstagram, "/"],
                [FaLinkedinIn, "/"],
              ]}
            />
          </div>
        </div> */}
        <hr className="border-dashed border-[var(--color-gray-4)] my-5" />
        <p className="text-sm leading-[150%] text-[var(--color-gray-4)] dark:text-white">
          member since {user?.createdAt}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
