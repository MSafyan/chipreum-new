import React, { useCallback, useEffect, useState } from "react";
import CreatePost from "@/components/createpost/createpost";
import Posts from "@/components/posts/posts";
import RightBar from "@/components/rightbar/rightbar";
import Story from "@/components/story/story";
// import StoryModal from "@/components/storymodal/storymodal";
import CreateStory from "@/components/createstory/createstory";
import { getProfileMe } from "@/data/atom";
import PostSection from "../components/posts/postSection";

function Home() {
  return (
    <>
      <div className="page-body container-fluid custom-padding grid grid-cols-4 gap-4">
        <PostSection />
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
    </>
  );
}

export default Home;
