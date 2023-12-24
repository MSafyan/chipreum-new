import { useState } from "react";
import Api from "../../api/api";
import Image from "./components/image";
import Input from "./components/input";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setShowStoryModel } from "@/store/slices/userSlice";

type StoryPreview = {
  file: string;
};

function CreateStory() {
  const { showStoryModel } = useSelector((state: RootState) => ({
    showStoryModel: state.users.showStoryModel,
  }));
  const dispatch = useDispatch();
  const acceptImages = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
  const [storyPreview, setStoryPreview] = useState<StoryPreview>({ file: "" });
  const [storyFile, setStoryFile] = useState<File | null>(null);
  const [disableStoryBtn, setDisableStoryBtn] = useState(false);

  const setInputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setStoryFile(e.target.files[0]);

      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setStoryPreview({ file: reader.result as string });
        }
      };
    }
  };

  const createStoryHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (storyPreview.file && storyFile) {
      setDisableStoryBtn(true);
      const formData = new FormData();
      formData.append("image", storyFile);

      const res = await Api.createStory(formData);
      if (res.status === 201) {
        const res2 = await Api.sendFollowersNotification({
          notification: `added a story.`,
        });
        if (res2.status === 201) {
          window.location.reload();
        }
      } else {
        setDisableStoryBtn(false);
        setStoryPreview({ file: "" });
        setStoryFile(null);
      }
    }
  };

  return (
    <div
      className={
        showStoryModel ? "fixed z-10 inset-0 overflow-y-auto" : "hidden"
      }
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={() => {
        console.log("clicked");
        dispatch(setShowStoryModel(false));
      }}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4 bg-[#1c1c1c]">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium" id="modal-title">
                  Add Story
                </h3>
                <form onSubmit={createStoryHandle} className="create-post">
                  <Image storyPreview={storyPreview} />
                  <Input
                    setInputHandle={setInputHandle}
                    acceptImages={acceptImages}
                  />
                  <div id="post-btn1" className="post-btn d-block">
                    <button
                      type="submit"
                      className="w-full px-5 py-2 text-center bg-custom-gradient text-white mt-5 rounded-md font-semibold uppercase border-none cursor-pointer"
                      disabled={disableStoryBtn}
                    >
                      post story
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStory;
