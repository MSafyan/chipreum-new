import dynamic from "next/dynamic";

const AgoraStreamComponentNoSSR = dynamic(
  () => import("./AgoraStreamComponent"),
  {
    ssr: false,
  }
);

function MyPage() {
  return (
    <div>
      <AgoraStreamComponentNoSSR />
    </div>
  );
}

export default MyPage;
