import React from "react";

const HeroSection = () => {
  return (
    <section className="page-root text-slate-50">
      <h1 className="z-10 bg-gradient-to-t from-red-500 to-red-600 bg-clip-text text-8xl font-bold text-transparent">
        Passwords Are Dead
      </h1>
      <h2 className="z-10 text-3xl font-medium text-neutral-100">
        Still stuck in the 90s?{" "}
        <span className="bg-gradient-to-t from-emerald-500 to-emerald-300 bg-clip-text text-transparent">
          Pashword is the Future
        </span>{" "}
      </h2>
      <div className="z-10 mt-10 flex flex-col space-y-5 text-center">
        <h3 className="text-xl font-bold text-neutral-300">Why?</h3>
        <div className="grid grid-flow-col space-x-10">
          <div className="card-container">
            <h4 className="card-heading">One Code to Rule them all</h4>
            <p className="card-content">
              Gone are the days of remembering multiple passwords. Pashword
              generates your passwords for you, for your websites and usernames.
            </p>
          </div>
          <div className="card-container">
            <h4 className="card-heading">Pass of Steel</h4>
            <p className="card-content">
              Pashword is cryptographically strong. Pashwords take thousands of
              trillions of years to break, now that, is strong.
            </p>
          </div>
          <div className="card-container">
            <h4 className="card-heading">Your special secret</h4>
            <p className="card-content">
              Your pashword belongs only to you and no one else. Only you can
              generate a pashword for your accounts.
            </p>
          </div>
          <div className="card-container">
            <h4 className="card-heading">Open Source</h4>
            <p className="card-content">
              Pashword is 100% Free and Open Source. It is transparent,
              anonymous and privacy respecting by default.
            </p>
          </div>
          <div className="card-container">
            <h4 className="card-heading">Works without Internet</h4>
            <p className="card-content">
              Pashword works without internet. All your pashwords are generated
              locally on your computer and no connection is made to outside
              servers. Everything stays on your device, secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
