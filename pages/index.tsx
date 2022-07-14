import { HiOutlineMenuAlt3, HiOutlineSelector } from "react-icons/hi";
import PASSWORD_LENGTH from "../constants/passwordLength";
import HeroSection from "../components/HeroSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Footer from "../components/Footer";
import React, { useState } from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [passwordLength, setPasswordLength] = useState(PASSWORD_LENGTH.LARGE);

  return (
    <div className="overflow-x-hidden">
      <HiOutlineMenuAlt3 className="absolute top-2 right-2 z-10 cursor-pointer text-3xl text-slate-50" />
      <HeroSection
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
      />
      <Section1 />
      <div className="mt-20">
        <img src="/why-pashword.svg" className="mx-auto" />
      </div>
      <Section2 />
      <Section3 />
      <div className="mb-20 px-10">
        <img src="/how-it-works.svg" className="mx-auto" />
      </div>
      <Footer />
      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
};

export default Home;
