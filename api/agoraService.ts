import axios from "./apiCore";
import { agoraRoutes } from "./apiRoutes";

export const getToken = async (isPublisher: boolean, channelName?: string) => {
  const res = await axios.get(
    agoraRoutes.getToken +
      `?isPublisher=${isPublisher}&channelName=${channelName}`
  );
  return res.data.token;
};
export const getAllStreams = async () => {
  const res = await axios.get(agoraRoutes.getAllStreams);
  return res.data.data;
};
export const deleteStream = async (channelName: string) => {
  const res = await axios.delete(
    agoraRoutes.deleteStream + `?channelName=${channelName}`
  );
  return res.data;
};
