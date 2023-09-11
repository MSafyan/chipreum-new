import { store } from "@/store/store"; // Import your store
import { setStreams, setToken } from "@/store/slices/agoraSlice";
import { deleteStream, getAllStreams, getToken } from "@/api/agoraService";

export const getTokenAction = async (
  isPublisher: boolean,
  channelName?: string
) => {
  try {
    const token = await getToken(isPublisher, channelName);

    store.dispatch(setToken(token));
    return token;
  } catch (error) {
    console.error(error);
    store.dispatch(setToken(null));
  }
};

export const getAllStreamsAction = async () => {
  try {
    const streams = await getAllStreams();
    store.dispatch(setStreams(streams));
  } catch (error) {
    console.error(error);
  }
};
export const deleteStreamAction = async (channelName: string) => {
  try {
    await deleteStream(channelName);
  } catch (error) {
    console.error(error);
  }
};
