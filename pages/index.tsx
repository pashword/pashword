import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="page-root">
      <main className="z-10 flex flex-col items-center justify-center">
        <h1 className="z-10 text-2xl font-bold text-slate-100 xxs:text-5xl xs:text-7xl sm:text-8xl">
          Pashword
        </h1>
        <h5 className="self-end text-xl text-slate-500">
          Passwords done right
        </h5>
        <form className="mt-5 flex w-full flex-col items-center justify-center space-y-5">
          <div className="flex w-full flex-col items-center justify-center">
            <label className="mx-4 text-gray-600">Website Name</label>
            <input
              type="text"
              name="website"
              className="input-text"
              placeholder="Example: reddit, google"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <label className="mx-4 text-gray-600">Username</label>
            <input
              type="text"
              name="username"
              className="input-text"
              placeholder="Example: nayamamarshe"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <label className="mx-4 text-gray-600">
              Secret Code - Used for all Pashwords
            </label>
            <input
              type="text"
              name="passphrase"
              className="input-text"
              placeholder="Example: mylittlepony"
            />
          </div>
        </form>
      </main>
      <div className="bottom-2/5 absolute left-0 h-128 w-128 rounded-full bg-violet-600 opacity-20 blur-[100px]" />
      <div className="absolute top-0 right-0 h-128 w-128 rounded-full bg-cyan-600 opacity-20 blur-[100px]" />
    </div>
  );
};

export default Home;
