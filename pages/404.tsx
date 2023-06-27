import Image from "next/image";
import Link from "next/link";
import error from "/public/images/error.png";

const Error = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-[#FCF2CE] dark:bg-[var(--color-gray-8)] h-[100vh]">
      <div className="max-w-[1030px] px-2">
        <Image src={error} alt="error" className="w-full" />

        <div className="text-center mt-8">
          <h1 className="text-3xl sm:text-5xl text-[var(--color-gray-6)] dark:text-white leading-[120%] font-semibold">
            404 Page Not Found
          </h1>
          <p className="text-[var(--color-gray-5)] dark:text-[var(--color-gray-2)] py-5 w-[30ch] sm:w-[85ch] m-auto">
            Donec orci quam, eleifend non fermentum at, facilisis quis libero.
            Cras at sollicitudin tortor, nec aliquam nulla. Fusce ut nulla
            felis. Vivamus ultricies ullamcorper nisi quis suscipit. Fusce
            cursus leo nibh, eget elementum tortor accumsan eu.
          </p>
          <Link
            href="/"
            className="py-2 px-3 rounded-lg text-[#F8FAFC] bg-[var(--color-primary)] text-center"
          >
            Go Back Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;

Error.getLayout = function getLayout(page: any) {
  return <>{page}</>;
};
