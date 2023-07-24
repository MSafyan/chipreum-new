import axios from "./apiCore";
import { Notification } from "@/store/types/notificationType";
import { notificationRoutes } from "./apiRoutes";

export async function fetchNotifications(): Promise<Notification[]> {
  const res = await axios.get(notificationRoutes.user);
  return res.data.data;
}

export async function sendFollowersNotification(data: any) {
  const res = await axios.post(notificationRoutes.all, data);
  return res.data.data;
}
export async function seeNotifications() {
  const res = await axios.get(notificationRoutes.seen);
  return res.data.data;
}
