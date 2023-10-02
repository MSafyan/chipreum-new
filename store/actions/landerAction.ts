import { store } from "@/store/store"; // Import your store
import { setLanders, setLoading } from "@/store/slices/landerSlice";
import { getLanders } from "@/api/landerService";

export const fetchLanders = async () => {
  try {
    store.dispatch(setLoading(true));
    const isAuthenticated = store.getState().users.user.user;
    const landers = await getLanders(isAuthenticated);
    store.dispatch(setLanders(landers));
  } catch (error) {
    console.error(error);
    store.dispatch(setLoading(false));
  }
};
