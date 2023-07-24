import { setLoading, setPost, setPosts } from "../slices/postSlice";
import { fetchPosts, createPost, likePost } from "@/api/postService";
import { store } from "../store";
import { errMsg } from "../utils/errMsg";
import { Post } from "../types/postType";
import { sendFollowersNotificationAction } from "./notificationAction";

export const loadPosts = async () => {
  store.dispatch(setLoading(true));
  try {
    const posts = await fetchPosts();
    store.dispatch(setPosts({ posts, loading: false }));
  } catch (err) {
    console.error(err);
    errMsg(err);
  }
};

export const createPostAction = async (data: any) => {
  store.dispatch(setLoading(true));
  try {
    const post: Post = await createPost(data);
    store.dispatch(setPost({ post, loading: false }));
    await loadPosts();
    sendFollowersNotificationAction({
      notification: `added a post.`,
    });
  } catch (err) {
    console.error(err);
    errMsg(err);
  }
};
export const likePostAction = async (data: any) => {
  store.dispatch(setLoading(true));
  try {
    const post: Post = await likePost(data.postId);
    store.dispatch(setPost({ post, loading: false }));
    await loadPosts();
    sendFollowersNotificationAction({
      toId: data.ownerId,
      notification: `liked your post`,
    });
  } catch (err) {
    console.error(err);
    errMsg(err);
  }
};
