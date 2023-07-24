import { LanguageRoutes } from "./apiRoutes";
import axios from "./apiCore";

export const fetchLanguages = async () => {
  try {
    const response = await axios.get(LanguageRoutes.languages);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
