import React, { useState } from "react";
import {
  FaCloud,
  FaCrown,
  FaHandsHelping,
  FaSuperpowers,
} from "react-icons/fa";
import { GoGistSecret } from "react-icons/go";
import { RiCloudOffLine, RiDownloadCloudFill } from "react-icons/ri";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const StepsSection = () => {
  const [step, setStep] = useState(0);

  const handleStep = (direction: "right" | "left") => {
    if (direction === "right") {
      setStep((step + 1) % 3);
      console.log(step);
    } else {
      if (step === -1) {
        setStep(0);
      }
      setStep(step === 0 ? 2 : step - 1);
    }
  };

  return (
    <section className="page-root snap-start bg-gradient-to-tr from-[#0d0511] to-[#090e14] text-slate-50">
      <div className="text-center">
        <h1 className="z-10 bg-gradient-to-r from-amber-400 via-green-400 to-blue-400 bg-clip-text text-8xl font-bold text-transparent">
          Passwords are Dead
        </h1>
        <h2 className="z-10 text-3xl font-medium text-slate-500">
          Still stuck in the 90s?{" "}
          <span className="font-semibold text-slate-300">
            Pashword is the Future
          </span>{" "}
        </h2>
      </div>
      <div className="mt-10 w-1/2">
        <div className="flex flex-row items-center justify-evenly">
          <button className="progress-point flex-shrink-0 bg-amber-400 text-amber-50">
            1
          </button>
          <div
            className={`h-1 w-full ${
              step >= 1
                ? "bg-gradient-to-r from-amber-400 to-green-400"
                : "bg-slate-600"
            }`}
          />
          <button
            className={`progress-point text-green-50 ${
              step >= 1 ? "bg-green-400" : "bg-slate-600"
            }`}
          >
            2
          </button>
          <div
            className={`h-1 w-full ${
              step === 2
                ? "bg-gradient-to-r from-green-400 to-blue-400"
                : "bg-slate-600"
            }`}
          />
          <button
            className={`progress-point text-blue-50 ${
              step === 2 ? "bg-blue-400" : "bg-slate-600"
            }`}
          >
            3
          </button>
        </div>
        <AnimatePresence exitBeforeEnter>
          <motion.div className="relative mt-5 flex min-h-fit w-full flex-col items-center justify-start rounded-3xl bg-slate-600/30 p-10 text-center">
            {step === 0 && (
              <>
                <h4 className="text-3xl font-semibold text-slate-400">
                  Yours Truly
                </h4>
                <p className="mt-5 w-4/5 text-xl text-slate-300">
                  A Pashword is a unique password. It's a cryptographically
                  strong password that's generated using your account details.
                  <br />
                  <br />
                  All you need to generate a Pashword is the website, your
                  username on that website and a key.
                </p>
              </>
            )}
            {step === 1 && (
              <>
                <h4 className="text-3xl font-semibold text-slate-400">
                  The Key is the Key
                </h4>
                <p className="mt-5 w-4/5 text-xl text-slate-300">
                  Your key is unique to you. It could be anything, your child's
                  birthdate followed by your pet name, your favorite video game
                  character followed your favorite number. <br />
                  <br /> This key must be unique to you and it's the only thing
                  that you need to remember. The same key will help you generate
                  Pashwords for thousands of other websites. A single key is all
                  you need to generate unique pashwords for all your accounts.
                </p>
              </>
            )}
            {step === 2 && (
              <>
                <motion.h4 className="text-3xl font-semibold text-slate-400">
                  Secure? You bet!
                </motion.h4>
                <motion.p className="mt-5 w-3/5 text-xl text-slate-300">
                  No information ever leaves your computer. <br />
                  <br />
                  Pashword is cryptographically secure and works without
                  internet. <br />
                  <br /> Pashword is 100% Open Source so you know it's safe.
                </motion.p>
              </>
            )}
            <IoIosArrowDropleftCircle
              className="absolute top-1/2 left-5 -translate-y-1/2 cursor-pointer text-5xl text-slate-400"
              onClick={() => handleStep("left")}
            />
            <IoIosArrowDroprightCircle
              className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer text-5xl text-slate-400"
              onClick={() => handleStep("right")}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default StepsSection;
