import axios from "./apiCore";
import { postRoutes } from "./apiRoutes";

export const fetchPosts = async () => {
  try {
    const response = await axios.get(postRoutes.timeLine);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const createPost = async (data: any) => {
  try {
    const response = await axios.post(postRoutes.create, data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const likePost = async (id: string) => {
  try {
    const response = await axios.post(`postRoutes.likePost${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
