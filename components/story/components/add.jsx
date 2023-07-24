import plus from "@/assets/images/icon/plus.png";
import { setShowStoryModel } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";

function Add({ storyBg }) {
  const dispatch = useDispatch();
  return (
    <div className="mx-2" onClick={() => dispatch(setShowStoryModel(true))}>
      <div
        className="story-box add-box story-box-modal p-2 border-2 border-solid border-[rgba(3,137,201,0.15)] relative cursor-pointer rounded-[10px]
				h-[130px] flex items-center justify-center
				"
        data-bs-toggle="modal"
        data-bs-target="#addStory"
      >
        <div
          className="bg-size blur-up lazyloaded bg-cover bg-[center_center] bg-no-repeat block"
          style={{
            backgroundImage: `url(${storyBg})`,
            position: "relative",
          }}
        >
          <div
            style={{
              paddingTop: "118%",
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={storyBg}
              className="img-fluid lazyload bg-img"
              crossorigin="anonymous"
              alt=""
              style={{ display: "none" }}
            />
            <div className="add-icon absolute -translate-x-2/4 -translate-y-2/4 left-[48%] top-2/4">
              <div className="icon  w-[50px] h-[50px] bg-[rgba(0,0,0,0.3)] flex items-center justify-center mx-auto my-0 rounded-[100%]">
                <img
                  src={plus.src}
                  className="img-fluid lazyloaded"
                  alt="plus"
                  crossorigin="anonymous"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
