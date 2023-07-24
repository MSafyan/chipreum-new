import axios from "./apiCore";
import { landerRoutes } from "./apiRoutes";

export const getLanders = async () => {
  try {
    const res = await axios.get(landerRoutes.LANDERS);
    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
