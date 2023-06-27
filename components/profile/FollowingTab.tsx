import followingData from "@/data/followingData";
import FollowingCard from "../cards/FollowingCard";

const FollowingTab = () => {
  return (
    <div className="flex items-center justify-center min-[600px]:justify-start flex-wrap gap-3 md:gap-6 mt-5">
      {followingData.map((itm) => (
        // Following Card
        <FollowingCard key={itm.id} data={itm} />
      ))}
    </div>
  );
};

export default FollowingTab;
