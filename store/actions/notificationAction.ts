import { resetUnseen, setNotifications } from "../slices/notificationSlice";
import {
  fetchNotifications,
  seeNotifications,
  sendFollowersNotification,
} from "@/api/notificationService";
import { Notification } from "../types/notificationType";
import { store } from "../store";
import { errMsg } from "../utils/errMsg";

export const getNotifications = async () => {
  try {
    const notifications: Notification[] = await fetchNotifications();
    store.dispatch(setNotifications(notifications));
  } catch (err) {
    console.error(err);
    errMsg(err);
  }
};
export const sendFollowersNotificationAction = async (data: any) => {
  try {
    await sendFollowersNotification(data);
  } catch (err) {
    console.error(err);
    errMsg(err);
  }
};

export const seeNotificationsAction = async () => {
  try {
    await seeNotifications();
    store.dispatch(resetUnseen());
  } catch (err) {
    console.error(err);
    errMsg(err);
  }
};
