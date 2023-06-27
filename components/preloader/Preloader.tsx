import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

const Preloader = (): any => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    showLoader && (
      <div className="h-screen w-screen flex items-center justify-center relative z-[999] bg-white dark:!bg-[var(--color-gray-8)]">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#448aff"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </div>
    )
  );
};

export default Preloader;
