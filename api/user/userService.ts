import {
  ForgotPasswordProps,
  ResetPasswordProps,
  UserJwtData,
} from "../../../store/types/userType";
import { APIClient } from "../apiCore";
import URL from "./api";

class UserService extends APIClient {
  constructor() {
    super();
  }

  async signUp(data: any) {
    try {
      const res = await this.create(URL.SIGNUP, data);
      const user: UserJwtData = res.data;
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async signIn(data: any) {
    try {
      const res = await this.create(URL.SIGNIN, data);
      const user: UserJwtData = res.data;
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async forgotPassword(data: ForgotPasswordProps) {
    try {
      const res = await this.create(URL.FORGOT_PASSWORD, data);
      const user: UserJwtData = res.data;
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async resetPassword(data: ResetPasswordProps) {
    try {
      const res = await this.create(URL.RESET_PASSWORD, data);
      const user = res.data;
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getMe() {
    try {
      const res = await this.get(URL.ME);
      const user = res.data;
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const userService = new UserService();

export default userService;
