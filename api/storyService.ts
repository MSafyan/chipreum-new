import axios from "./apiCore";
import { storyRoutes } from "./apiRoutes";

export const getAllStory = async () => {
  const user = await axios.get(storyRoutes.getAllStory);
  return user?.data?.data;
};

export const getUserStory = async () => {
  const user = await axios.get(storyRoutes.getUserStory);
  return user?.data?.data;
};
