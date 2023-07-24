export interface Share {
  isShare: boolean;
  shareCount: number;
}

export interface Owner {
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
  followers: any[];
  followings: any[];
  isAdmin: boolean;
  profileImage: string;
  notifications: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Post {
  share: Share;
  _id: string;
  description: string;
  owner: Owner;
  likes: any[];
  comments: any[];
  createdAt: string;
  __v: number;
}

export interface PostState {
  posts: Post[];
  post: Post | null;
  loading: boolean;
}
