import { useFormik } from "formik";
import { InputDescription, InputFile } from "../common/post/create";
import CardTitle from "./components/cardtitle";
import Image from "./components/image";
import Video from "./components/video";
import { createPostAction } from "@/store/actions/postAction";
import { useState } from "react";

const CreatePost: React.FC = () => {
  const acceptImages = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
  const acceptVideos = ["video/webm", "video/webp", "video/mp4", "video/mkv"];
  const [imageVideo, setImageVideo] = useState({ image: false, video: false });

  const formik = useFormik({
    initialValues: {
      description: "",
      file: "",
      image: "",
      video: "",
    },
    onSubmit: async (values) => {
      if (values.description || values.image || values.video) {
        const formData = new FormData();
        if (values.description.trim().length > 0) {
          formData.append("description", values.description);
        }
        if (values.video) {
          formData.append("video", values.video);
        }
        if (values.image) {
          formData.append("image", values.image);
        }
        await createPostAction(formData);
        setImageVideo({ image: false, video: false });
        formik.resetForm();
      } else {
        setImageVideo({ image: false, video: false });
        formik.resetForm();
      }
    },
  });

  const setInputHandle = (e: any) => {
    if (e.target.name === "file") {
      if (acceptImages.includes(e.target.files[0]?.type)) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
          if (reader.readyState === 2) {
            formik.setFieldValue("file", reader.result);
            formik.setFieldValue("image", e.target.files[0]);
            formik.setFieldValue("video", "");
          }
        };
        setImageVideo({ image: true, video: false });
      } else if (acceptVideos.includes(e.target.files[0]?.type)) {
        formik.setFieldValue(
          "file",
          window.URL.createObjectURL(e.target.files[0])
        );
        formik.setFieldValue("video", e.target.files[0]);
        formik.setFieldValue("image", "");
        setImageVideo({ image: false, video: true });
      }
      return;
    }
    formik.setFieldValue(e.target.name, e.target.value);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="card rounded-lg p-9 shadow-md"
    >
      <div className="static-section">
        <CardTitle />
        {InputDescription({ createPost: formik.values, setInputHandle })}
      </div>
      {imageVideo.image && Image({ createPost: formik.values })}
      {imageVideo.video && Video({ createPost: formik.values })}
      <ul className="create-btm-option mt-2">
        {InputFile({ setInputHandle, acceptImages, acceptVideos })}
      </ul>
      <div id="post-btn" className="post-btn d-block">
        <button
          type="submit"
          className="w-full px-5 py-2 text-center bg-gradient-to-r from-red-500 via-red-500 to-purple-700 text-white mt-5 rounded-md font-semibold uppercase border-none cursor-pointer"
          disabled={formik.isSubmitting}
        >
          post
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
