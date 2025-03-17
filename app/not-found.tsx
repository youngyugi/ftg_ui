import "./globals.css";

const NotFound = () => {
  return (
    <html>
      <body>
        <main className="w-screen h-screen font-sans">
          <div className="h-screen text-center flex flex-col items-center justify-center">
            <div>
              <h1 className="inline-block mr-5 pr-6 text-2xl font-medium leading-10 align-top border-r border-slate-500">
                404
              </h1>
              <div className="inline-block">
                <h2 className="text-sm font-normal leading-10 m-0">
                  This page could not be found.
                </h2>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default NotFound;
