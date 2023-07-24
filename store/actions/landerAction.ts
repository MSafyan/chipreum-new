import { store } from "@/store/store"; // Import your store
import { setLanders, setLoading } from "@/store/slices/landerSlice";
import { getLanders } from "@/api/landerService";

export const fetchLanders = async () => {
  try {
    store.dispatch(setLoading(true));
    const landers = await getLanders();
    store.dispatch(setLanders(landers));
  } catch (error) {
    console.error(error);
    store.dispatch(setLoading(false));
  }
};
