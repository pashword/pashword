import React, { useEffect, useRef } from "react";

const Section2 = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <section className="page-root flex gap-10 pt-20 text-slate-50 sm:gap-20 md:pt-0">
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
            src="https://assets6.lottiefiles.com/packages/lf20_eg88dyk9.json"
            background="transparent"
            ref={ref}
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <p className="w-full px-5 text-center text-base text-slate-300 sm:px-16 sm:text-2xl md:w-1/3 md:px-0 md:text-right">
          Your secret key must be unique to you. It could be anything, your
          child's birthdate followed by your pet name, your favorite video game
          character followed your favorite number... You get the deal.
          <br />
          <br />
          The same secret key will help you generate Pashwords for thousands of
          other websites. A single key is all you need to generate unique
          pashwords for all your accounts.
        </p>
      </div>
    </section>
  );
};

export default Section2;
