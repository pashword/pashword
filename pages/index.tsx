import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import { generatePashword } from "../utils/algorithm2";
import { motion, AnimatePresence } from "framer-motion";

const Home: NextPage = () => {
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pashword, setPashword] = useState("");
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const websiteRegex = /[a-z\-\_]/;

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

    let pashedPassword = generatePashword(JSON.stringify(toHash), 20);

    setPashword(pashedPassword);
  };

  return (
    <div className="relative snap-y snap-mandatory overflow-x-hidden bg-gradient-to-br from-[#0d0511] to-[#090e14]">
      <div className="page-root animate relative snap-start bg-gradient-to-br">
        <div className="absolute top-[15%] left-[55%] h-96 w-96 rounded-full bg-cyan-500 opacity-30 mix-blend-exclusion blur-6xl filter"></div>

        <div className="absolute left-[40%] h-4/5 w-96 -rotate-45 animate-blob rounded-full bg-gradient-to-t from-cyan-500 to-violet-600 opacity-30 blur-6xl"></div>
        <div className="absolute left-[80%] -top-[30%] h-4/5 w-96 -rotate-45 animate-blob rounded-full bg-gradient-to-t from-cyan-500 to-purple-600 opacity-30 blur-6xl"></div>
        <div className="absolute -left-[10%] -bottom-[20%] h-4/5 w-96 rotate-45 animate-blob rounded-full bg-gradient-to-t from-purple-500 to-cyan-600 opacity-30 blur-6xl"></div>

        <div className="absolute top-[35%] left-[40%] h-1/2 w-96 animate-blob rounded-full bg-purple-500 opacity-30 mix-blend-exclusion blur-6xl filter"></div>

        <div className="absolute bottom-10 right-10 h-96 w-24 rotate-45 transform animate-blob bg-purple-500 opacity-50 mix-blend-exclusion blur-6xl filter first-letter:rounded-full"></div>

        {/* SECTION 1 */}
        <main className="flex flex-col items-center justify-center">
          <h1 className="z-10 text-2xl font-bold text-slate-50 xxs:text-6xl xs:text-7xl sm:text-8xl">
            Pashword
          </h1>
          <h5 className="z-10 text-center text-xs font-medium text-slate-300  xs:self-end sm:text-xl">
            Passwords done right
          </h5>
          <AnimatePresence>
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
              <motion.button
                className={`${
                  pashword.length < 1
                    ? "scale-y-0 opacity-0"
                    : "scale-y-100 opacity-100"
                } animate mt-4 w-4/5 rounded-full bg-green-500 py-2 ring-green-400 backdrop-blur-xl duration-500 hover:shadow-lg hover:shadow-green-400/30 hover:ring-1 hover:ring-green-200`}
              >
                <p className="text-green-200">Pashword</p>
                <p className="text-green-50">{pashword}</p>
              </motion.button>
            </form>
          </AnimatePresence>
        </main>
      </div>
      <HeroSection />
    </div>
  );
};

export default Home;
