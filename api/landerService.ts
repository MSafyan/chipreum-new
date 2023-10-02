import axios from "./apiCore";
import { landerRoutes } from "./apiRoutes";

export const getLanders = async (isAuthenticated: boolean) => {
  try {
    const res = await axios.get(
      landerRoutes.LANDERS + (isAuthenticated ? "" : "/public")
    );
    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
