const Forbidden = () => {
  return (
    <section className="w-screen h-screen font-sans">
      <div className="h-screen text-center flex flex-col items-center justify-center">
        <div>
          <h1 className="inline-block mr-5 pr-6 text-2xl font-medium leading-10 align-top border-r border-slate-500">
            403
          </h1>
          <div className="inline-block">
            <h2 className="text-sm font-normal leading-10 m-0">
              You are not authorized to access this resource.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forbidden;
