import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import { generatePashword } from "../utils/algorithm2";

const Home: NextPage = () => {
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
    <div className="relative overflow-x-hidden bg-gradient-to-br from-[#1e0928] to-[#1c1630]">
      <div className="page-root relative overflow-hidden bg-gradient-to-br ">
        {/* <div className="absolute top-[15%] left-[35%] h-96 w-96 animate-blob rounded-full bg-purple-500 opacity-50 mix-blend-exclusion blur-6xl filter"></div>
        <div className="absolute top-[15%] left-[50%] h-96 w-96 animate-blob rounded-full bg-sky-500 opacity-50 mix-blend-exclusion blur-6xl filter"></div> */}

        <div className="fixed top-[15%] left-[55%] h-96 w-96 rounded-full bg-violet-500 opacity-30 mix-blend-exclusion blur-6xl filter"></div>

        <div className="fixed left-[40%] h-4/5 w-96 -rotate-45 animate-blob rounded-full bg-gradient-to-t from-red-500 to-blue-600 opacity-30 blur-6xl"></div>

        <div className="fixed left-[80%] -top-[30%] h-4/5 w-96 -rotate-45 animate-blob rounded-full bg-gradient-to-t from-red-500 to-blue-600 opacity-30 blur-6xl"></div>
        <div className="fixed -left-[10%] -bottom-[20%] h-4/5 w-96 rotate-45 animate-blob rounded-full bg-gradient-to-t from-red-500 to-blue-600 opacity-30 blur-6xl"></div>

        <div className="fixed top-[35%] left-[40%] h-1/2 w-96 animate-blob rounded-full bg-sky-500 opacity-30 mix-blend-exclusion blur-6xl filter"></div>

        <div className="fixed bottom-10 right-10 h-96 w-24 rotate-45 transform animate-blob bg-sky-500 opacity-50 mix-blend-exclusion blur-6xl filter first-letter:rounded-full"></div>

        {/* SECTION 1 */}
        <main className="flex flex-col items-center justify-center">
          <h1 className="z-10 text-2xl font-bold text-slate-50 xxs:text-6xl xs:text-7xl sm:text-8xl">
            Pashword
          </h1>
          <h5 className="z-10 text-center text-xs font-medium text-slate-300  xs:self-end sm:text-xl">
            Passwords done right
          </h5>
          <form
            className="z-10 mt-5 flex w-full flex-col items-center justify-center gap-y-1 text-center text-xs xxs:gap-y-5 xxs:text-base"
            onSubmit={submitHandler}
          >
            <div className="flex w-full flex-col items-center justify-center">
              <label className="input-label">Website</label>
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
              <label className="input-label">Secret Code</label>
              <input
                type="text"
                name="passphrase"
                className="input-text"
                placeholder="Example: mylittlepony"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="submit-button">
              Get Pashword 😎
            </button>
          </form>
        </main>
      </div>
      <HeroSection />
    </div>
  );
};

export default Home;
