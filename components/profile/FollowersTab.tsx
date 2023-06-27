import followersData from "@/data/followersData";
import FollowerCard from "../cards/FollowerCard";

const FollowersTab = () => {
  return (
    <div className="flex items-center justify-center min-[600px]:justify-start flex-wrap gap-3 md:gap-6 mt-5">
      {followersData.map((itm) => (
        // Follower Card
        <FollowerCard key={itm.id} data={itm} />
      ))}
    </div>
  );
};

export default FollowersTab;
