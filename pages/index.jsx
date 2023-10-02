import React, { useCallback, useEffect, useState } from "react";
import CreatePost from "@/components/createpost/createpost";
import Posts from "@/components/posts/posts";
import RightBar from "@/components/rightbar/rightbar";
import Story from "@/components/story/story";
// import StoryModal from "@/components/storymodal/storymodal";
import CreateStory from "@/components/createstory/createstory";
import { getProfileMe } from "@/data/atom";
import { useRecoilState } from "recoil";
import Api from "@/api/api";
import { getUserStory } from "@/api/storyService";

function Home() {
  const [loader, setLoader] = useState(true);
  const [storyLoader, setStoryLoader] = useState(true);
  const [showStoryModel, setShowStoryModel] = useState(true);
  const [stories, setStories] = useState([]);
  const [allStories, setAllStories] = useState([]);
  const [userStories, setUserStories] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [activeLanders, setActiveLanders] = useState([]);
  const [profileMe, setProfileMe] = useRecoilState(getProfileMe);
  const [timelinePosts, setTimelinePosts] = useState([]);

  // const getProfile = useCallback(async (isSubscribe) => {
  //   const res = await Api.getProfile();
  //   if (isSubscribe) {
  //     if (res.status === 200) {
  //       // setLoader(false);
  //       setProfileMe(res.data.data);
  //       localStorage.setItem("user", JSON.stringify(res.data.data));
  //     }
  //   }
  // }, []);

  const getAllUsers = useCallback(async (isSubscribe) => {
    const res = await Api.getAllUsers();
    if (isSubscribe) {
      if (res.status === 200) {
        setAllUsers(res.data.data);
      }
    }
  }, []);

  const getStories = useCallback(async (isSubscribe) => {
    debugger;
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

  // useEffect(() => {
  //   let isSubscribe = true;
  //   getAllUsers(isSubscribe);
  //   return () => (isSubscribe = false);
  // }, []);

  // useEffect(() => {
  //   let isSubscribe = true;
  //   getProfile(isSubscribe);
  //   return () => (isSubscribe = false);
  // }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflowY = "auto";
  }, [loader]);

  return (
    <>
      <div className="page-body container-fluid custom-padding grid grid-cols-4 gap-4">
        <div className="page-center col-span-4 lg:col-span-3">
          <Story
            profileMe={profileMe}
            stories={stories}
            allStories={allStories}
            setUserStories={setUserStories}
            setStoryLoader={setStoryLoader}
            setShowStoryModel={setShowStoryModel}
          />
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
        <div className="col-span-1 lg:block hidden">
          <RightBar />
        </div>
      </div>
      {/* {showStoryModel && (
        <StoryModal
          profileMe={profileMe}
          stories={stories}
          allStories={allStories}
          userStories={userStories}
          setUserStories={setUserStories}
          setShowStoryModel={setShowStoryModel}
        />
      )} */}
      <CreateStory
        setShowStoryModel={setShowStoryModel}
        setStoryLoader={setStoryLoader}
      />
    </>
  );
}

export default Home;
