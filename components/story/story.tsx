import Slider from "react-slick";
import Add from "./components/add";
import StoryItem from "./components/storyitem";
import { slider8 } from "../common/Slider";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

function Story() {
  const { user, stories } = useSelector((state: RootState) => ({
    user: state.users.user.user,
    stories: state.story.stories,
  }));
  return (
    <>
      <div className="story-section ratio_115 mb-2">
        <Slider {...slider8} className="slide-8 no-arrow default-space">
          <Add storyBg={user?.avatar} />
          {stories.map((user: any) => (
            <StoryItem
              userId={user._id}
              fullname={user.fullname}
              avatar={user.avatar}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Story;
