import { toast } from "react-toastify";

export const errMsg = (error: any) => {
  // eslint-disable-next-line no-debugger
  console.log(error.response);
  try {
    debugger;
    if (!error.response) {
      return toast.warn("server error");
    } else if (
      error.response.data === "Not Found" ||
      error.response.data === "Method Not Allowed"
    ) {
      return toast.warn("server error");
    } else if (error?.response?.data?.message) {
      return toast.warn(error?.response?.data?.message);
    } else if (error.response?.data?.message[0]?.messages[0]?.message) {
      const msg = error.response?.data?.message[0]?.messages[0]?.message;
      return toast.warn(msg);
    } else if (error?.response?.data?.status === 400) {
      return toast.warn("Username or Email already exists");
    } else if (error?.response?.data?.status === 500) {
      return toast.warn("Internal Server Error");
    } else if (error?.response?.data?.status === 404) {
      return toast.warn("User Not Found");
    } else if (error?.response?.data?.status === 401) {
      return toast.warn("Unauthorized");
    } else if (error?.response?.data?.status === 403) {
      return toast.warn("Forbidden");
    } else if (error?.response?.data?.status === 503) {
      return toast.warn("Service Unavailable");
    } else if (error?.response?.data?.status === 502) {
      return toast.warn("Bad Gateway");
    } else if (error?.response?.data?.status === 504) {
      return toast.warn("Gateway Timeout");
    } else if (error.response.data.error === "Forbidden") {
      return toast.warn("Not authenticated");
    }
  } catch (error) {
    return toast.warn("Server Error");
  }
};
