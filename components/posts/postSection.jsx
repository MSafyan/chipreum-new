import { getProfileMe } from "@/data/atom";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import CreatePost from "../createpost/createpost";
import Posts from "./posts";
import CreateStory from "../createstory/createstory";
import Story from "../story/story";
import Api from "@/api/api";
import { useRouter } from "next/router";
import { getUserStory } from "@/api/storyService";

const PostSection = () => {
  const [loader, setLoader] = useState(true);
  const [storyLoader, setStoryLoader] = useState(true);
  const [showStoryModel, setShowStoryModel] = useState(true);
  const [stories, setStories] = useState([]);
  const [allStories, setAllStories] = useState([]);
  const [userStories, setUserStories] = useState([]);
  const [profileMe, setProfileMe] = useRecoilState(getProfileMe);
  const [timelinePosts, setTimelinePosts] = useState([]);

  const router = useRouter();
  const getStories = useCallback(async (isSubscribe) => {
    const res = await getUserStory();
    if (isSubscribe) {
      if (res) {
        setStories(res);
        setStoryLoader(false);
      }
    }
  }, []);

  const getAllStories = useCallback(async (isSubscribe) => {
    const res = await Api.getAllStories();
    if (isSubscribe) {
      if (res.status === 200) {
        setAllStories(res.data.data);
      }
    }
  }, []);

  useEffect(() => {
    let isSubscribe = true;
    getAllStories(isSubscribe);
    getStories(isSubscribe);
    return () => (isSubscribe = false);
  }, [storyLoader]);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflowY = "auto";
  }, [loader]);

  return (
    <>
      <div className="page-center col-span-4 lg:col-span-3">
        {router.pathname === "/" && (
          <Story
            profileMe={profileMe}
            stories={stories}
            allStories={allStories}
            setUserStories={setUserStories}
            setStoryLoader={setStoryLoader}
            setShowStoryModel={setShowStoryModel}
          />
        )}

        <div className="container-fluid section-t-space px-0 layout-default">
          <div className="page-content">
            <div className="content-center">
              <CreatePost setLoader={setLoader} setPosts={setTimelinePosts} />
              <div className="overlay-bg"></div>
              {timelinePosts && (
                <Posts isAuth={false} setUserPosts={setTimelinePosts} />
              )}
              <div className="post-loader no-more">
                <div className="no-more-text">
                  <p>no more post</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateStory
        setShowStoryModel={setShowStoryModel}
        setStoryLoader={setStoryLoader}
      />
    </>
  );
};

export default PostSection;
