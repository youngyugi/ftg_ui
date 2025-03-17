const UnauthorizedPage = () => {
  return (
    <main className="w-screen h-screen font-sans">
      <div className="h-screen text-center flex flex-col items-center justify-center">
        <div>
          <h1 className="inline-block mr-5 pr-6 text-2xl font-medium leading-10 align-top border-r border-slate-500">
            401
          </h1>
          <div className="inline-block">
            <h2 className="text-sm font-normal leading-10 m-0">
              You're not authorized to access this page.
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UnauthorizedPage;
