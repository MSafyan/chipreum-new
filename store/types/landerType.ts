export interface Lander {
  _id: string;
  fullname: string;
  gender: string;
  avatar: string;
  coverUrl: string;
  followerss: string[];
  followingss: string[];
  posts: string[];
  email: string;
  password: string;
  username: string;
  profilePicture: string;
  coverPicture: string;
  followers: string[];
  followings: string[];
  isAdmin: boolean;
  profileImage: string;
  notifications: any[]; // Replace with actual type if possible
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface landerReducerState {
  landers: Lander[];
  loading: boolean;
}
