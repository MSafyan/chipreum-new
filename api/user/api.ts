const BASE = "/api";
const AUTH = BASE + "/auth";
const SIGNIN = AUTH + "/local";
const SIGNUP = AUTH + "/local/register";
const FORGOT_PASSWORD = AUTH + "/forgot-password";
const RESET_PASSWORD = AUTH + "/reset-password";
const ME = BASE + "/users/me";

export default { SIGNIN, SIGNUP, FORGOT_PASSWORD, RESET_PASSWORD, ME };
