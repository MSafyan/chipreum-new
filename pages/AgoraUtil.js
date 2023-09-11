import AgoraUIKit from "agora-react-uikit";

const Videocall = ({ isPublisher }) => {
  const rtcProps = {
    appId: "604316ffbaa44ea087a4a9e85f2d441d",
    channel: "test",
    token:
      "007eJxTYOiTiDmynvGot1VuG/MVc5lJtXYKX0QiP/Bz/JGb/ct8poYCg5mBibGhWVpaUmKiiUlqooGFeaJJomWqhWmaUYqJiWGKRdGTlIZARgbPFVtYGRkgEMRnYShJLS5hYAAAlqYdjQ==",
    role: isPublisher ? "host" : "audience",
  };
  return <AgoraUIKit rtcProps={rtcProps} />;
};

export default Videocall;
