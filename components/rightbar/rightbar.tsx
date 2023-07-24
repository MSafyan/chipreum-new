import { useEffect, useState } from "react";
import Api from "../../api/api";
import User from "./components/user";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { fetchLanders } from "@/store/actions/landerAction";
import { Lander } from "@/store/types/landerType";

function RightBar() {
  const { landers, loading } = useSelector((state: RootState) => ({
    landers: state.lander.landers,
    loading: state.lander.loading,
  }));

  const [users, setUsers] = useState<Lander[]>([]);

  const filterUsersHandle = async (id: string) => {
    let filteredUser = landers.filter((user) => user._id !== id);
    setUsers(filteredUser);
    await Api.userFollow(id);
    await Api.sendSingleNotification({
      toId: id,
      notification: `followed you`,
    });
  };

  useEffect(() => {
    (async () => await fetchLanders())();
  }, []);

  return (
    <div className="card shadow-[0_0_8px_0_rgb(0_0_0_/_5%)] h-[-webkit-max-content] h-[-moz-max-content] h-max sticky z-[1] ml-auto mb-[30px] sm:p-[0.7rem] xl:p-[2vw] rounded-[5px] top-[100px]">
      <div className="panel-header">
        <h2>Active Residents</h2>
      </div>
      <div className="pt-10">
        <div className="friend-list">
          <ul>
            {landers ? (
              landers.length > 0 ? (
                landers.map((item) => (
                  <User
                    id={item?._id}
                    fullname={item?.fullname}
                    avatar={item?.avatar}
                    filterUsersHandle={filterUsersHandle}
                  />
                ))
              ) : (
                <span style={{ color: "grey" }}>No Data Found</span>
              )
            ) : (
              <span style={{ color: "grey" }}>No Data Found</span>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
