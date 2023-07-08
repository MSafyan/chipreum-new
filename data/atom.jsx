import { atom, selector } from "recoil";

export const getProfileMe = atom({
  key: "getProfileMe",
  default: selector({
    key: "getProfileMe/Default",
    get: () => {
      if (typeof window === "undefined") {
        return {};
      }
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user) : {};
    },
  }),
});
export const getUserProfile = atom({
  key: "getUserProfile",
  default: {},
});
