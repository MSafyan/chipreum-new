import * as React from "react";
import Post from "./post/post";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getLanguages } from "@/store/actions/languageAction";
import { loadPosts } from "@/store/actions/postAction";

function Posts() {
  const { languages, posts } = useSelector((state: RootState) => ({
    languages: state.language.languages,
    posts: state.post.posts,
  }));

  React.useEffect(() => {
    const apiCall = async () => {
      await getLanguages();
      await loadPosts();
    };
    apiCall();
  }, []);

  return (
    <>
      <div className="post-panel ">
        {posts &&
          posts?.map((post: any) => (
            <div key={post._id}>
              <Post
                isAuth={false}
                post={post}
                isShare={post.share.isShare}
                avatar={
                  !post.share.isShare
                    ? post.owner.avatar
                    : post.share.user.avatar
                }
                fullname={
                  !post.share.isShare
                    ? post.owner.fullname
                    : post.share.user.fullname
                }
                postId={post._id}
                options={languages}
              />
            </div>
          ))}
      </div>
    </>
  );
}

export default Posts;
