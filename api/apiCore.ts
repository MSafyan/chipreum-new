import axios from "axios";
import config from "../config";

axios.defaults.baseURL = config.BASE_URL;

const setAuthHeader = (token: any) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
  }
};

const removeBearer = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

const setToken = (token?: string) => {
  if (typeof window !== "undefined") {
    var token = token;
    if (!token) {
      token = localStorage.getItem("token") || undefined;
    }
    if (token) {
      setAuthHeader(token);
    }
  }
};

setToken();

export { setAuthHeader, setToken, removeBearer };
export default axios;
