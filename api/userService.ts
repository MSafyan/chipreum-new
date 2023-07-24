import { UserJwtData } from "@/store/types/userType";
import axios from "./apiCore";
import { authRoutes, profileRoutes } from "./apiRoutes";

const signUp = async (data: any) => {
  try {
    const res = await axios.post(authRoutes.SIGNUP, data);
    const user: UserJwtData = res.data;
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const signIn = async (data: any) => {
  try {
    const res = await axios.post(authRoutes.SIGNIN, data);
    const user: UserJwtData = res.data;
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateCover = async (data: any) => {
  return await axios.put(profileRoutes.COVER_PHOTO, data);
};

const getProfile = async () => {
  const user = await axios.get(profileRoutes.GET_PROFILE);
  return user?.data?.data;
};

const updateProfile = async (data: any) => {
  const user = await axios.put(profileRoutes.UPDATE_PROFILE, data);
  return user?.data?.data;
};

const updatePassword = async (data: any) => {
  const user = await axios.put(profileRoutes.UPDATE_PASSWORD, data);
  return user?.data?.data;
};
export default {
  signUp,
  signIn,
  updateCover,
  getProfile,
  updateProfile,
  updatePassword,
};
