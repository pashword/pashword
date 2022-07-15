import PASSWORD_LENGTH from "../constants/passwordLength";
import HeroSection from "../components/HeroSection";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Footer from "../components/Footer";
import React, { useState } from "react";
import type { NextPage } from "next";
import Illustration from "../components/Illustration";

const Home: NextPage = () => {
  const [passwordLength, setPasswordLength] = useState(PASSWORD_LENGTH.LARGE);

  return (
    <div className="overflow-x-hidden">
      {/* MENU BUTTON */}
      <HiOutlineMenuAlt3 className="absolute top-2 right-2 z-10 cursor-pointer text-3xl text-slate-50" />
      {/* SECTIONS */}
      <HeroSection
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
      />
      <Section1 />
      <Illustration className="mt-20" source="/why-pashword.svg" />
      <Section2 />
      <Section3 />
      <Illustration className="mb-20 px-10" source="/how-it-works.svg" />
      <Footer />
      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
};

export default Home;
