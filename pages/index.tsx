import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import { generatePashword } from "../utils/algorithm2";

const Home: NextPage = () => {
  const backgrounds2 = ["bg-cyan-600", "bg-pink-600"];
  const backgrounds = ["bg-violet-600", "bg-blue-500"];

  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pashword, setPashword] = useState("");
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const totalSectionsOnPage = 2;
    const multiplier = window.innerHeight - 600 / totalSectionsOnPage;

    const handleScroll = () => {
      console.log("Multiplier: ", multiplier);
      console.log("window.scrollY", window.scrollY);
      setBackgroundIndex(Math.floor(window.scrollY / multiplier));
      console.log(
        "🚀 => handleScroll => Math.floor(window.scrollY / multiplier)",
        Math.floor(window.scrollY / multiplier)
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    let toHash = {
      website,
      username,
      password,
    };

    let pashed = generatePashword(JSON.stringify(toHash), 20);
  };

  return (
    <div className="overflow-x-hidden">
      <div className="page-root">
        <main className="flex flex-col items-center justify-center">
          <h1 className="z-10 text-2xl font-bold text-slate-100 xxs:text-6xl xs:text-7xl sm:text-8xl">
            Pashword
          </h1>
          <h5 className="text-center text-xs text-slate-500 xs:self-end sm:text-xl">
            Passwords done right
          </h5>
          <form
            className="z-10 mt-5 flex w-full flex-col items-center justify-center gap-y-1 text-center text-xs xxs:gap-y-5 xxs:text-base"
            onSubmit={submitHandler}
          >
            <div className="flex w-full flex-col items-center justify-center">
              <label className="input-label">Website Name</label>
              <input
                type="text"
                name="website"
                className="input-text"
                placeholder="Example: reddit, google"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <label className="input-label">Username</label>
              <input
                type="text"
                name="username"
                className="input-text"
                placeholder="Example: nayamamarshe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <label className="input-label">
                Secret Code - Used for all Pashwords
              </label>
              <input
                type="text"
                name="passphrase"
                className="input-text"
                placeholder="Example: mylittlepony"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="z-10 mt-7 h-8 w-4/5 rounded-full bg-blue-600 px-4 text-center text-gray-100 outline-none ring-1 ring-blue-500 hover:shadow-lg hover:shadow-blue-600/20 hover:ring-blue-400 focus:ring-cyan-300 xxs:h-12"
            >
              Get Pashword 😎
            </button>
          </form>
          <div
            className={`absolute left-0 h-1/2 w-full rounded-full duration-1000 ${backgrounds[backgroundIndex]} opacity-30 blur-[100px]`}
          />
          <div
            className={`${backgrounds2[backgroundIndex]} absolute right-0 top-0 h-1/2 w-full rounded-full opacity-30 blur-[100px]`}
          />
        </main>
      </div>
      <HeroSection />
    </div>
  );
};

export default Home;
