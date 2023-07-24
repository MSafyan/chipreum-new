import { NotificationBody } from "@/store/types/notificationType";
import Image, { StaticImageData } from "next/image";

type PropeType = {
  data: NotificationBody;
};

const SingleNotification = ({ data }: PropeType) => {
  const { _id, notification, senderId, senderAvatar, createdAt } = data;

  return (
    <div className="flex items-center gap-3 border-b last:border-b-0 border-[#6F767E] border-opacity-40 pb-2 md:pb-4 last:pb-0">
      <div className="inline-block relative h-8 w-8">
        <Image
          src={senderAvatar}
          alt="img"
          fill
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h6 className="text-base leading-[150%] font-semibold text-[var(--color-gray-5)] dark:text-white">
          {senderId}
          <span className="text-sm leading-[150%] font-normal text-[var(--color-gray-4)] dark:text-[var(--color-gray-3)]">
            {" "}
            {notification}
          </span>
        </h6>
        <span className="text-xs leading-[150%] text-[var(--color-gray-4)]">
          {createdAt}
        </span>
      </div>
    </div>
  );
};

export default SingleNotification;
