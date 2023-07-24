import { store } from "../store";
import { errMsg } from "../utils/errMsg";
import { setLoading, setStories } from "../slices/StorySlice";
import { getAllStory, getUserStory } from "@/api/storyService";

export const getAllStoryAction = async () => {
  store.dispatch(setLoading(true));
  try {
    const stories = await getAllStory();
    store.dispatch(setStories(stories));
  } catch (err) {
    console.error(err);
    errMsg(err);
  } finally {
    store.dispatch(setLoading(false));
  }
};
export const getUserStoryAction = async () => {
  store.dispatch(setLoading(true));
  try {
    const stories = await getUserStory();
    store.dispatch(setStories(stories));
  } catch (err) {
    console.error(err);
    errMsg(err);
  } finally {
    store.dispatch(setLoading(false));
  }
};
