import { store } from "../store";
import { errMsg } from "../utils/errMsg";
import userService from "../../api/user/userService";
import { setUser } from "../../store/slices/userSlice";
import { toast } from "react-toastify";
import {
  ForgotPasswordProps,
  LoginProps,
  ResetPasswordProps,
} from "../types/userType";
import { removeBearer, setAuthorization } from "../../api/apiCore";

export const signUp = async (data: any) => {
  try {
    store.dispatch(setUser({ loading: true }));

    const res = await userService.signUp(data);
    toast.success("Sign up successfully");
    store.dispatch(setUser({ loading: false, user: res }));
    return "/login";
  } catch (error) {
    store.dispatch(setUser({ loading: false, user: null, jwt: null }));
    errMsg(error);
  }
};

export const signIn = async (data: LoginProps) => {
  try {
    store.dispatch(setUser({ loading: true }));

    const res = await userService.signIn({
      identifier: data.email,
      password: data.password,
    });

    toast.success("Logged In successfully");
    store.dispatch(setUser({ loading: false, jwt: res.jwt }));
    setAuthorization(res.jwt);
    await getMe();

    return "/";
  } catch (error) {
    store.dispatch(setUser({ loading: false, user: null, jwt: null }));
    errMsg(error);
  }
};
export const forgotPassword = async (data: ForgotPasswordProps) => {
  try {
    store.dispatch(setUser({ loading: true }));
    await userService.forgotPassword(data);
    toast.success("Email sent successfully");
    store.dispatch(setUser({ loading: false, user: null, jwt: null }));
    return "resetPassword";
  } catch (error) {
    store.dispatch(setUser({ loading: false, user: null, jwt: null }));
    errMsg(error);
  }
};
export const resetPassword = async (data: ResetPasswordProps) => {
  try {
    store.dispatch(setUser({ loading: true }));
    await userService.resetPassword(data);

    toast.success("Password reset successfully");
    store.dispatch(setUser({ loading: false }));
    return "login";
  } catch (error) {
    store.dispatch(setUser({ loading: false }));
    errMsg(error);
  }
};
export const getMe = async () => {
  try {
    store.dispatch(setUser({ loading: true }));
    const res = await userService.getMe();
    store.dispatch(setUser({ loading: false, user: res }));

    return "login";
  } catch (error) {
    store.dispatch(setUser({ loading: false }));
    errMsg(error);
  }
};

export const logoutUser = async () => {
  store.dispatch(setUser({ user: null, jwt: null }));
  localStorage.removeItem("token");
  removeBearer();
};
