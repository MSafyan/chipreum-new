import { fetchLanguages } from "@/api/languageService";
import { Language } from "../types/languageType";
import { store } from "../store";
import { errMsg } from "../utils/errMsg";
import { setLanguages, setLoading } from "../slices/languageSlice";

export const getLanguages = async () => {
  try {
    store.dispatch(setLoading(true));
    const languages: Language[] = await fetchLanguages();
    store.dispatch(setLanguages({ languages, loading: false }));
  } catch (error) {
    console.error(error);
    errMsg(error);
    store.dispatch(setLoading(false));
  }
};
