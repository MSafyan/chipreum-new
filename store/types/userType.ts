import { Notification } from "./notificationType";
import { Post } from "./postType";

export interface userReducerState {
  user: {
    loading: boolean;
    user: User | null;
    jwt: string | null;
  };
  redirectTo: null;
  showStoryModel: boolean;
}

export interface User {
  _id: string;
  fullname: string;
  gender: string;
  avatar: string;
  coverUrl: string;
  followerss: string[];
  followingss: string[];
  posts: Post[];
  email: string;
  password: string;
  username: string;
  profilePicture: string;
  coverPicture: string;
  followers: any[]; // replace any with the appropriate type
  followings: any[]; // replace any with the appropriate type
  isAdmin: boolean;
  profileImage: string;
  notifications: Notification[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface UserJwtData {
  token: string;
  user: User;
}

export type LoginProps = {
  email: string;
  password: string;
};

export type ForgotPasswordProps = {
  email: string;
};

export type SignupProps = {
  username: string;
  email: string;
  password: string;
};
export type ResetPasswordProps = {
  password: string;
  passwordConfirmation: string;
  code: string;
};
