import axios from "./apiCore";
import { storyRoutes } from "./apiRoutes";

export const getAllStory = async () => {
  const user = await axios.get(storyRoutes.getAllStory);
  return user?.data?.data;
};

export const getUserStory = async (isAuthenticated: boolean) => {
  const user = await axios.get(
    storyRoutes.getUserStory + (isAuthenticated ? "" : "/public")
  );
  return user?.data?.data;
};
