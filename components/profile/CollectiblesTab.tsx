import collectiblesData from "@/data/collectiblesData";
import CollectiblesCard from "../cards/CollectiblesCard";

const CollectiblesTab = () => {
  return (
    <div className="flex items-center justify-center min-[600px]:justify-start flex-wrap gap-3 md:gap-6 mt-5">
      {collectiblesData.map((itm) => (
        // Collectibles Card
        <CollectiblesCard key={itm.id} data={itm} />
      ))}
    </div>
  );
};

export default CollectiblesTab;
