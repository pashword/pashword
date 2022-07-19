import PASSWORD_LENGTH from "../constants/passwordLength";
import Illustration from "../components/Illustration";
import HeroSection from "../components/HeroSection";
import { CgMenuRightAlt } from "react-icons/cg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Footer from "../components/Footer";
import React, { useState } from "react";
import Menu from "../components/Menu";
import type { NextPage } from "next";
import FAQ from "../components/FAQ";

const Home: NextPage = () => {
  const [passwordLength, setPasswordLength] = useState(PASSWORD_LENGTH.LARGE);
  const [showMenu, setShowMenu] = useState(false);
  const [realtimeMode, setRealtimeMode] = useState(false);

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
        <CgMenuRightAlt />
      </button>
      <div className="relative">
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>

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
      />
      <Section3 />
      <Illustration
        className="mt-20 mb-20 md:px-10"
        source="/how-it-works.svg"
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
