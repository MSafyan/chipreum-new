const BASE = "/api/v1";

const USER = BASE + "/user";
const Notification = BASE + "/notification";
const POST = BASE + "/post";
const STORY = BASE + "/story";

const LAN_BASE = "https://libretranslate.de";

const authRoutes = {
  SIGNIN: USER + "/login",
  SIGNUP: USER + "/register",
};

const profileRoutes = {
  COVER_PHOTO: USER + "/update/cover",
  GET_PROFILE: USER + "/profile/me",
  UPDATE_PROFILE: USER + "/update/profile",
  UPDATE_PASSWORD: USER + "/update/password",
};

const landerRoutes = {
  LANDERS: USER + "/landers",
};

const notificationRoutes = {
  user: Notification + "/user",
  all: Notification + "/all",
  seen: Notification + "/seen",
};
const LanguageRoutes = {
  languages: LAN_BASE + "/languages",
};
const postRoutes = {
  timeLine: POST + "/timeline",
  create: POST + "/create",
  likePost: POST + "/like",
};

const storyRoutes = {
  getAllStory: STORY + "/story/all",
  getUserStory: STORY + "/story/users",
};

export {
  authRoutes,
  landerRoutes,
  notificationRoutes,
  LanguageRoutes,
  postRoutes,
  profileRoutes,
  storyRoutes,
};
