interface VideoProps {
  createPost: {
    file: string;
  };
}

const Image: React.FC<VideoProps> = ({ createPost }) => {
  return (
    <>
      {createPost.file && (
        <div style={{ marginTop: "10px" }}>
          <img
            src={createPost.file}
            alt="post"
            style={{ width: "100%", borderRadius: "5px" }}
          />
        </div>
      )}
    </>
  );
};

export default Image;
