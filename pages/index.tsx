import PASSWORD_LENGTH from "../constants/passwordLength";
import Illustration from "../components/Illustration";
import { AiOutlineLeftCircle } from "react-icons/ai";
import HeroSection from "../components/HeroSection";
import { FiArrowDownCircle } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Footer from "../components/Footer";
import React, { MouseEventHandler, useEffect, useState } from "react";
import Menu from "../components/Menu";
import type { NextPage } from "next";
import FAQ from "../components/FAQ";

let deferredPrompt: any;

const Home: NextPage = () => {
  const [passwordLength, setPasswordLength] = useState(PASSWORD_LENGTH.LARGE);
  const [realtimeMode, setRealtimeMode] = useState(false);
  const [installable, setInstallable] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      setInstallable(true);
    });

    window.addEventListener("appinstalled", () => {
      // Log install to analytics
      console.log("Certified Gamer");
    });
  }, []);

  const handleInstallClick = (e: any) => {
    // Hide the app provided install promotion
    setInstallable(false);
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === "accepted") {
        console.log("Install Prompt Accepted");
      } else {
        console.log("As you wish my g");
      }
    });
  };

  return (
    <div
      className={`overflow-x-hidden ${
        showMenu && "h-screen overflow-y-hidden"
      }`}
    >
      {/* MENU BUTTON */}
      <button
        className="absolute top-2 right-2 z-10 cursor-pointer text-3xl text-white/80"
        onClick={() => {
          setShowMenu(true);
        }}
      >
        <AiOutlineLeftCircle />
      </button>
      <div className="relative">
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>

      {installable && (
        <button
          className="fixed bottom-5 right-5 z-50 flex flex-row items-center justify-center gap-2 rounded-full bg-violet-600 p-3 text-slate-50"
          onClick={handleInstallClick}
        >
          <FiArrowDownCircle className="text-xl" />
          <span className="hidden sm:block">Install Pashword</span>
        </button>
      )}

      {/* SECTIONS */}
      <HeroSection
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
      />
      <Section1 />
      <Section2 />
      <Illustration
        className="mx-auto px-5 pt-10 pb-10 md:px-20 lg:w-1/2 lg:px-0"
        source="/with-without-pashword.png"
        sectionId="with-without-pashword"
      />
      <Section3 />
      <Illustration
        className="mt-20 mb-20 md:px-10"
        source="/how-it-works.svg"
        sectionId="how-it-works"
      />
      <FAQ />
      <Footer />
      <ToastContainer
        position="top-center"
        theme="colored"
        limit={1}
        autoClose={1000}
      />
    </div>
  );
};

export default Home;
