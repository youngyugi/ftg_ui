import Link from "next/link";

const UnauthorizedPage = () => {
  return (
    <section className="w-screen h-screen font-sans">
      <div className="h-screen text-center flex flex-col items-center justify-center">
        <div>
          <h1 className="inline-block md:mr-5 md:pr-6 text-2xl font-medium leading-10 align-top md:border-r border-slate-500">
            401
          </h1>
          <div className="inline-block">
            <h2 className="text-sm font-normal leading-10 m-0">
              You're not authorized to access this page, please{" "}
              <Link href={"/"} className="text-green-400">
                login
              </Link>
              .
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnauthorizedPage;
