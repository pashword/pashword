import React, { useEffect, useRef } from "react";

const Section2 = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <section
      className="page-root mt-20 flex gap-10 text-slate-50 sm:gap-20 md:pt-0"
      id="key"
    >
      <div className="z-10 px-2 text-center sm:px-0">
        <h1 className="z-10 bg-gradient-to-r from-blue-400 via-pink-400 to-orange-400 bg-clip-text text-2xl font-bold text-transparent xxs:text-5xl sm:text-8xl">
          The Key is the Key
        </h1>
        <h2 className="z-10 text-base font-medium text-slate-500 xs:text-xl sm:text-3xl">
          Know why it's important
        </h2>
      </div>
      <div className="z-10 flex w-full flex-col items-center justify-center gap-10 px-2 sm:px-0 md:flex-row">
        <div className="w-4/5 xs:w-3/5 md:w-96">
          <lottie-player
            src="/animations/password_lock_animation.json"
            background="transparent"
            ref={ref}
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <p className="w-full px-5 text-center text-sm text-slate-300 xs:text-base sm:px-16 sm:text-2xl md:w-1/3 md:px-0 md:text-left">
          Your secret key must be unique to you. It's important to choose a
          secret key that nobody else could guess and make sure you use a
          combination of symbols, uppercase letters and numbers for extra
          protection from hackers.
          <br />
          <br />
          Pashword will tell you if your secret key is secure or not. It's very
          important to not tell anyone your secret key or else hackers could
          find out all your passwords.
          <br />
          <br />
          Use the same secret key everytime you want to generate a new pashword.
          You can also use a password manager to store multiple secret keys.
          <br />
          <br />
          Some good examples:{" "}
          <span className="font-bold underline underline-offset-8">
            Jimmy$Neutron.64#
          </span>{" "}
          or{" "}
          <span className="font-bold underline underline-offset-8">
            My_L1ttle.P0ny&501
          </span>
        </p>
      </div>
    </section>
  );
};

export default Section2;
