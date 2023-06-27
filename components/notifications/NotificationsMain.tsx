import notificationData from "@/data/notificationData";
import SingleNotification from "../common/SingleNotification";

const NotificationsMain = () => {
  return (
    <div className="w-full h-[77vh] sm:h-[100vh]">
      <div className="w-full max-w-[768px] m-auto bg-white dark:bg-[var(--color-gray-6)] px-4 md:px-7 py-3 md:py-5 shadow-[0px_1px_2px_rgba(0,0,0,0.2)]">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <h4 className="text-2xl leading-[130%] font-semibold text-[var(--color-gray-6)] dark:text-white">
            Notifications
          </h4>
          <h6 className="flex items-center gap-2 text-base leading-[130%] font-semibold text-[var(--color-gray-5)] dark:text-white cursor-pointer">
            <span className="material-symbols-outlined !text-[var(--color-primary)]">
              checklist
            </span>
            Mark all as read
          </h6>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 mt-6">
          {notificationData.map((itm) => (
            // Single Notification
            <SingleNotification key={itm.id} data={itm} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsMain;
