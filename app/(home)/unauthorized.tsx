import Image from "next/image";

const UnauthorizedPage = () => {
  return (
    <main className="w-full h-full md:flex md:justify-center md:items-center ">
      <div>
        <Image
          src="/not-auth.png"
          width={400}
          height={300}
          alt="401 unauthorized"
        />
      </div>
      <div className="text-center md:ml-10 sm:mt-10">
        <p className="text-6xl md:mb-10 mb-5">401</p>
        <p className="text-xl">Please log in to access this page</p>
      </div>
    </main>
  );
};

export default UnauthorizedPage;
