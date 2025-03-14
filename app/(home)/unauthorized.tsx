import Image from "next/image";

const UnauthorizedPage = () => {
  return (
    <main className="w-full h-full flex justify-center items-center ">
      <div>
        <Image
          src="/not-auth.png"
          width={400}
          height={300}
          alt="401 unauthorized"
        />
      </div>
      <div className="text-center ml-10">
        <p className="text-6xl mb-10">401</p>
        <p className="text-xl">Please log in to access this page</p>
      </div>
    </main>
  );
};

export default UnauthorizedPage;
