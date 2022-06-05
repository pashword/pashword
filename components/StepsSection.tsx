import React from "react";
import {
  FaCloud,
  FaCrown,
  FaHandsHelping,
  FaSuperpowers,
} from "react-icons/fa";
import { GoGistSecret } from "react-icons/go";
import { RiCloudOffLine, RiDownloadCloudFill } from "react-icons/ri";

const StepsSection = () => {
  return (
    <section className="page-root snap-start bg-gradient-to-tr from-[#0d0511] to-[#090e14] text-slate-50">
      <div className="text-center">
        <h1 className="z-10 bg-gradient-to-r from-amber-400 via-green-400 to-blue-400 bg-clip-text text-8xl font-bold text-transparent">
          Passwords are Dead
        </h1>
        <h2 className="z-10 text-3xl font-medium text-slate-500">
          No need to remember passwords{" "}
          <span className="font-semibold text-slate-300">ever again!</span>{" "}
        </h2>
      </div>
      <div className="flex w-1/2 flex-col items-center justify-center text-center">
        <div className="mt-10 flex flex-col gap-5">
          <div className="flex flex-col items-center justify-center gap-5">
            <h4 className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-300/30 text-center text-5xl">
              1
            </h4>
            <p className="text-xl">
              A pashword is a unique password. It's a password that's generated
              using your account details. All you need to generate Pashword is
              the website, your username on that website and a key.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <h4 className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-300/30 text-center text-5xl">
              2
            </h4>
            <p className="text-center text-xl">
              Your key is unique to you. It could be anything, your child's
              birthdate followed by your pet name, your favorite video game
              character followed your favorite number. This key must be unique
              to you and it's the only thing you need to remember. The same key
              will help you generate Pashwords for thousands of websites. A
              single key is all you need to generate unique pashwords for all
              your accounts.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <h4 className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-300/30 text-center text-5xl">
              3
            </h4>
            <p className="w-1/2 text-center text-xl">
              No information leaves your computer. Pashword is cryptographically
              secure and works without internet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
