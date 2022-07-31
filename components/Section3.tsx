import React, { useEffect, useRef } from "react";

const Section3 = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <section
      className="page-root flex gap-10 pt-20 text-slate-50 sm:gap-20 md:pt-0"
      id="secure"
    >
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
        <p className="w-full px-5 text-center text-sm text-slate-300 xs:text-base sm:px-16 sm:text-2xl md:w-1/3 md:px-0 md:text-left">
          Having trust issues? Fear not, no information ever leaves your
          computer.
          <br />
          <br />
          Pashword is cryptographically secure and works without internet. Don't
          believe it? Just turn off your internet and see the magic. No remote
          servers are ever used, everything happens on your device and
          everything is encrypted.
          <br />
          <br />
          Pashword is also{" "}
          <a
            href="https://github.com/NayamAmarshe/pashword"
            className="text-sky-500"
          >
            100% Free and Open Source
          </a>
          , licensed under AGPLv3.{" "}
          <a
            href="https://github.com/NayamAmarshe/pashword/deployments/activity_log?environment=Production"
            className="text-sky-500"
          >
            All deployments of Pashword are 100% verifiable
          </a>{" "}
          so you know it'll always be transparent and safe.
        </p>
        <div className="w-4/5 xs:w-3/5 md:w-96">
          <lottie-player
            src="/animations/laptop_wire_animation.json"
            background="transparent"
            ref={ref}
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </section>
  );
};

export default Section3;
