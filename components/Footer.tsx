import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-2 pb-5">
      <h3 className="text-3xl font-bold text-slate-100">Pashword</h3>
      <div className="text-center">
        <p className="text-slate-400">
          Copyright © 2022 <b>Pashword</b>
        </p>
        <p className="text-slate-400">
          Made by{" "}
          <a
            href="https://github.com/NayamAmarshe"
            className="cursor-pointer font-bold"
          >
            Nayam Amarshe
          </a>{" "}
          with 🖱 and ⌨
        </p>
      </div>
    </div>
  );
};

export default Footer;
