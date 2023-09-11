import { store } from "../store";
import { errMsg } from "../utils/errMsg";
import userService from "@/api/userService";
import { setUser } from "@/store/slices/userSlice";
import { toast } from "react-toastify";
import { LoginProps } from "../types/userType";
import { removeBearer, setAuthHeader } from "../../api/apiCore";
import Router from "next/router";

export const signUp = async (data: any) => {
  try {
    store.dispatch(setUser({ loading: true }));

    const res = await userService.signUp(data);
    toast.success("Sign up successfully");
    store.dispatch(setUser({ loading: false, user: res }));
    return Router.push("/login");
  } catch (error) {
    store.dispatch(setUser({ loading: false, user: null, jwt: null }));
    errMsg(error);
  }
};

export const signIn = async (data: LoginProps) => {
  try {
    store.dispatch(setUser({ loading: true }));
    const res = await userService.signIn({
      email: data.email,
      password: data.password,
    });

    toast.success("Logged In successfully");
    store.dispatch(setUser({ loading: false, user: res.user, jwt: res.token }));
    setAuthHeader(res.token);

    return Router.push("/");
  } catch (error) {
    store.dispatch(setUser({ loading: false, user: null, jwt: null }));
    errMsg(error);
  }
};

export const logoutUser = async () => {
  debugger;
  store.dispatch(setUser({ user: null, jwt: null }));
  localStorage.removeItem("token");
  removeBearer();
};

export const updateCoverAction = async (data: any) => {
  try {
    store.dispatch(setUser({ loading: true }));
    await userService.updateCover(data);
    await getProfileAction();
    toast.success("Updated successfully");
  } catch (error) {
    errMsg(error);
  } finally {
    store.dispatch(setUser({ loading: false }));
  }
};
export const getProfileAction = async () => {
  try {
    store.dispatch(setUser({ loading: true }));
    const res = await userService.getProfile();
    store.dispatch(setUser({ loading: false, user: res }));
  } catch (error) {
    errMsg(error);
  }
};

export const updateProfileAction = async (data: any) => {
  try {
    store.dispatch(setUser({ loading: true }));
    await userService.updateProfile(data);
    await getProfileAction();
    toast.success("Updated successfully");
  } catch (error) {
    errMsg(error);
  } finally {
    store.dispatch(setUser({ loading: false }));
  }
};

export const updatePasswordAction = async (data: any) => {
  try {
    store.dispatch(setUser({ loading: true }));
    await userService.updatePassword(data);
    await getProfileAction();
    toast.success("Updated successfully");
  } catch (error) {
    errMsg(error);
  } finally {
    store.dispatch(setUser({ loading: false }));
  }
};
