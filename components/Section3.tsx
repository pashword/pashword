import React, { useEffect, useRef, useState } from "react";

const Section3 = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <section className="page-root flex gap-10 bg-gradient-to-tr from-[#090e14] to-[#0d0511] text-slate-50 sm:gap-20">
      <div className="z-10 px-2 text-center sm:px-0">
        <h1 className="z-10 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-2xl font-bold text-transparent xxs:text-5xl sm:text-8xl">
          Private and Secure
        </h1>
        <h2 className="z-10 text-base font-medium text-slate-500 xs:text-xl sm:text-3xl">
          Secure{" "}
          <span className="font-semibold text-slate-300">= Pashword</span>
        </h2>
      </div>
      <div className="z-10 flex w-full flex-col items-center justify-center gap-10 px-2 sm:px-0 md:flex-row">
        <p className="w-full px-5 text-center text-base text-slate-300 sm:px-16 sm:text-2xl md:w-1/3 md:px-0 md:text-left">
          No information ever leaves your computer.
          <br />
          <br />
          Pashword is cryptographically secure and works without internet. Even
          if someone knew your username, they wouldn't be able to generate a
          Pashword without your secret key.
          <br />
          <br />
          Pashword is also 100% Open Source so you know it'll always be
          transparent and safe.
        </p>
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_frJ5A7.json"
          background="transparent"
          ref={ref}
          speed="1"
          loop
          autoplay
          style={{ width: "400px", height: "300px" }}
        ></lottie-player>
      </div>
    </section>
  );
};

export default Section3;
