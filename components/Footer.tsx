import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-2 pb-2">
      <a
        href="https://github.com/NayamAmarshe/pashword"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub className="text-2xl text-slate-400" />
      </a>
      <h3 className="text-xl font-bold text-slate-100 xs:text-3xl">Pashword</h3>
      <div className="text-center text-sm xs:text-base">
        <p className="text-slate-400">
          Copyright © 2022{" "}
          <a
            href="https://github.com/NayamAmarshe/pashword"
            className="font-bold"
            target="_blank"
            rel="noreferrer"
          >
            Pashword
          </a>
        </p>
        <p className="text-slate-400">
          Made by{" "}
          <a
            href="https://github.com/NayamAmarshe"
            className="cursor-pointer font-semibold"
            target="_blank"
            rel="noreferrer"
          >
            Nayam Amarshe
          </a>{" "}
          with 🖱 and ⌨
          <br />
          <span className="text-xs">
            No AI was used in the creation of this project.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
