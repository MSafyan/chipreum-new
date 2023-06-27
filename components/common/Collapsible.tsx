import { motion } from "framer-motion";
import { useState } from "react";

const Collapse = () => {
  const [collapsed, setCollapsed] = useState(true);

  function toggleCollapse() {
    setCollapsed(!collapsed);
  }

  return (
    <div className="border border-gray-400 p-4 flex flex-col gap-4">
      <div
        className="flex items-center justify-between w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
        onClick={toggleCollapse}
      >
        <span>Click to collapse</span>
        <motion.button
          animate={{ rotate: collapsed ? 0 : 180 }}
          transition={{ duration: 0.5 }}
        >
          <span className="material-symbols-outlined">expand_more</span>
        </motion.button>
      </div>
      <motion.div
        className="overflow-hidden"
        animate={{ height: collapsed ? 0 : "auto" }}
        transition={{ duration: 0.5 }}
      >
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor mi
          vel massa suscipit, nec semper lacus placerat. Praesent sed ante vel
          arcu ultrices tristique in ac purus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed auctor mi vel massa suscipit, nec
          semper lacus placerat. Praesent sed ante vel arcu ultrices tristique
          in ac purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed auctor mi vel massa suscipit, nec semper lacus placerat. Praesent
          sed ante vel arcu ultrices tristique in ac purus.
        </p>
      </motion.div>
    </div>
  );
};

export default Collapse;
