export interface Notification {
  id: NotificationBody;
  seen: boolean;
  _id: string;
}

export interface NotificationBody {
  _id: string;
  notification: string;
  senderId: string;
  senderAvatar: string;
  createdAt: string;
  __v: number;
}

export interface NotificationState {
  notifications: {
    unSeen: number;
    data: Notification[];
  };
  loading: boolean;
}
