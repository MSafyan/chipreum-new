import { atom, selector } from "recoil";

let getProfileMe;

if (!getProfileMe) {
  getProfileMe = atom({
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
}

let getUserProfile;

if (!getUserProfile) {
  getUserProfile = atom({
    key: "getUserProfile",
    default: {},
  });
}

export { getProfileMe, getUserProfile };
